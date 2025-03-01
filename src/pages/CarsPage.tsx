import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { allCars } from '@/data/cars';

const CarsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    make: 'all',
    minPrice: 0,
    maxPrice: 500000,
    minYear: 2010,
    maxYear: 2025,
    condition: 'all',
    transmission: 'all',
  });
  const [showFilters, setShowFilters] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    setFilters({
      type: 'all',
      make: 'all',
      minPrice: 0,
      maxPrice: 500000,
      minYear: 2010,
      maxYear: 2025,
      condition: 'all',
      transmission: 'all',
    });
    setSearchTerm('');
  };

  const filteredCars = allCars.filter(car => {
    // Search term filter
    if (searchTerm && !car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Type filter
    if (filters.type !== 'all' && car.type !== filters.type) {
      return false;
    }
    
    // Make filter
    if (filters.make !== 'all' && car.make !== filters.make) {
      return false;
    }
    
    // Price filter
    if (car.price < filters.minPrice || car.price > filters.maxPrice) {
      return false;
    }
    
    // Year filter
    if (car.year < filters.minYear || car.year > filters.maxYear) {
      return false;
    }
    
    // Condition filter
    if (filters.condition !== 'all' && car.condition !== filters.condition) {
      return false;
    }
    
    // Transmission filter
    if (filters.transmission !== 'all' && car.transmission !== filters.transmission) {
      return false;
    }
    
    return true;
  });

  const importCars = filteredCars.filter(car => car.type === 'import');
  const exportCars = filteredCars.filter(car => car.type === 'export');

  const makes = [...new Set(allCars.map(car => car.make))];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Available Cars</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our selection of premium vehicles available for import and export. Find your dream car today.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by make, model, or keywords..."
                className="pl-10 pr-4 py-6 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cars Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Mobile Toggle */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
              
              {Object.values(filters).some(value => 
                value !== 'all' && value !== 0 && value !== 500000 && value !== 2010 && value !== 2025
              ) && (
                <Button 
                  variant="ghost" 
                  onClick={resetFilters}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Reset
                </Button>
              )}
            </div>

            {/* Filters Sidebar */}
            <motion.div 
              className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="bg-card rounded-lg p-6 shadow-sm sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="text-sm"
                  >
                    Reset All
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Type Filter */}
                  <div>
                    <Label className="text-base">Type</Label>
                    <Select 
                      value={filters.type} 
                      onValueChange={(value) => handleFilterChange('type', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="import">Import</SelectItem>
                        <SelectItem value="export">Export</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Make Filter */}
                  <div>
                    <Label className="text-base">Make</Label>
                    <Select 
                      value={filters.make} 
                      onValueChange={(value) => handleFilterChange('make', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Makes</SelectItem>
                        {makes.map((make) => (
                          <SelectItem key={make} value={make}>{make}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <div className="flex justify-between items-center">
                      <Label className="text-base">Price Range</Label>
                      <span className="text-sm text-muted-foreground">
                        ${filters.minPrice.toLocaleString()} - ${filters.maxPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-6 px-2">
                      <Slider
                        defaultValue={[filters.minPrice, filters.maxPrice]}
                        max={500000}
                        step={5000}
                        onValueChange={(value) => {
                          handleFilterChange('minPrice', value[0]);
                          handleFilterChange('maxPrice', value[1]);
                        }}
                      />
                    </div>
                  </div>

                  {/* Year Range */}
                  <div>
                    <div className="flex justify-between items-center">
                      <Label className="text-base">Year</Label>
                      <span className="text-sm text-muted-foreground">
                        {filters.minYear} - {filters.maxYear}
                      </span>
                    </div>
                    <div className="mt-6 px-2">
                      <Slider
                        defaultValue={[filters.minYear, filters.maxYear]}
                        min={2010}
                        max={2025}
                        step={1}
                        onValueChange={(value) => {
                          handleFilterChange('minYear', value[0]);
                          handleFilterChange('maxYear', value[1]);
                        }}
                      />
                    </div>
                  </div>

                  {/* Condition */}
                  <div>
                    <Label className="text-base">Condition</Label>
                    <Select 
                      value={filters.condition} 
                      onValueChange={(value) => handleFilterChange('condition', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Conditions</SelectItem>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Used">Used</SelectItem>
                        <SelectItem value="Certified">Certified Pre-Owned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Transmission */}
                  <div>
                    <Label className="text-base">Transmission</Label>
                    <Select 
                      value={filters.transmission} 
                      onValueChange={(value) => handleFilterChange('transmission', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select transmission" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Transmissions</SelectItem>
                        <SelectItem value="Automatic">Automatic</SelectItem>
                        <SelectItem value="Manual">Manual</SelectItem>
                        <SelectItem value="Semi-Auto">Semi-Automatic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cars Grid */}
            <motion.div 
              className="lg:w-3/4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="all">All Cars ({filteredCars.length})</TabsTrigger>
                  <TabsTrigger value="import">Import ({importCars.length})</TabsTrigger>
                  <TabsTrigger value="export">Export ({exportCars.length})</TabsTrigger>
                </TabsList>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {Object.entries(filters).map(([key, value]) => {
                    if (value === 'all' || 
                        (key === 'minPrice' && value === 0) || 
                        (key === 'maxPrice' && value === 500000) ||
                        (key === 'minYear' && value === 2010) ||
                        (key === 'maxYear' && value === 2025)) {
                      return null;
                    }
                    
                    let label = '';
                    if (key === 'minPrice') return null; // Handle as part of maxPrice
                    if (key === 'maxPrice') label = `Price: $${filters.minPrice.toLocaleString()} - $${value.toLocaleString()}`;
                    else if (key === 'minYear') return null; // Handle as part of maxYear
                    else if (key === 'maxYear') label = `Year: ${filters.minYear} - ${value}`;
                    else label = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
                    
                    return (
                      <Badge key={key} variant="outline" className="px-3 py-1">
                        {label}
                        <X 
                          className="ml-2 h-3 w-3 cursor-pointer" 
                          onClick={() => {
                            if (key === 'maxPrice') {
                              handleFilterChange('minPrice', 0);
                              handleFilterChange('maxPrice', 500000);
                            } else if (key === 'maxYear') {
                              handleFilterChange('minYear', 2010);
                              handleFilterChange('maxYear', 2025);
                            } else {
                              handleFilterChange(key, 'all');
                            }
                          }}
                        />
                      </Badge>
                    );
                  })}
                </div>
                
                {filteredCars.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No cars found</h3>
                    <p className="text-muted-foreground mb-6">Try adjusting your filters or search criteria</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
                
                <TabsContent value="all">
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredCars.map((car, index) => (
                      <CarCard key={car.id} car={car} index={index} />
                    ))}
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="import">
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {importCars.map((car, index) => (
                      <CarCard key={car.id} car={car} index={index} />
                    ))}
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="export">
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {exportCars.map((car, index) => (
                      <CarCard key={car.id} car={car} index={index} />
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CarCard = ({ car, index }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div variants={fadeIn}>
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow duration-300">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {car.condition}
          </div>
          <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {car.type === 'import' ? 'Import' : 'Export'}
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <p className="font-bold text-primary">${car.price.toLocaleString()}</p>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{car.location}</p>
          
          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Year:</span> {car.year}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Mileage:</span> {car.mileage}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Engine:</span> {car.engine}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Transmission:</span> {car.transmission}
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="font-normal">
              {car.make}
            </Badge>
            <Button asChild size="sm">
              <Link to={`/cars/${car.id}`}>View Details</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CarsPage;