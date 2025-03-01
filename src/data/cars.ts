export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: string;
  engine: string;
  transmission: string;
  condition: string;
  type: 'import' | 'export';
  location: string;
  image: string;
  description?: string;
  features?: string[];
}

export const featuredCars: Car[] = [
  {
    id: '1',
    name: 'Mercedes-Benz S-Class',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2023,
    price: 120000,
    mileage: '5,000 km',
    engine: '3.0L V6',
    transmission: 'Automatic',
    condition: 'New',
    type: 'import',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'The Mercedes-Benz S-Class is the flagship luxury sedan from the German automaker. This 2023 model features the latest technology, comfort, and performance innovations.',
    features: [
      'MBUX Infotainment System',
      'Burmester 3D Surround Sound',
      'Heated and Ventilated Seats',
      'Driver Assistance Package',
      'Panoramic Sunroof',
      'Ambient Lighting'
    ]
  },
  {
    id: '2',
    name: 'BMW X7',
    make: 'BMW',
    model: 'X7',
    year: 2023,
    price: 95000,
    mileage: '3,200 km',
    engine: '4.4L V8',
    transmission: 'Automatic',
    condition: 'New',
    type: 'import',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    description: 'The BMW X7 is a full-size luxury SUV that combines spaciousness with dynamic performance. This model comes with all the premium features expected in a flagship BMW.',
    features: [
      'xDrive All-Wheel Drive',
      'Air Suspension',
      'Panoramic Sky Lounge LED Roof',
      'Harman Kardon Surround Sound',
      'Heated and Cooled Cup Holders',
      'Gesture Control'
    ]
  },
  {
    id: '3',
    name: 'Porsche 911 Carrera',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2022,
    price: 135000,
    mileage: '1,500 km',
    engine: '3.0L Flat-6',
    transmission: 'PDK',
    condition: 'New',
    type: 'import',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'The iconic Porsche 911 Carrera continues to set the standard for sports cars. This model delivers exceptional performance with the refinement expected from Porsche.',
    features: [
      'Sport Chrono Package',
      'PASM Sport Suspension',
      'Sport Exhaust System',
      'Porsche Dynamic Light System',
      'Bose Surround Sound',
      'Adaptive Sport Seats'
    ]
  },
  {
    id: '5',
    name: 'Lexus LX 600',
    make: 'Lexus',
    model: 'LX 600',
    year: 2022,
    price: 110000,
    mileage: '8,500 km',
    engine: '3.5L Twin-Turbo V6',
    transmission: 'Automatic',
    condition: 'Used',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'The Lexus LX 600 is a full-size luxury SUV that offers exceptional comfort, advanced technology, and impressive off-road capabilities.',
    features: [
      'Mark Levinson Audio System',
      'Multi-Terrain Select',
      'Crawl Control',
      'Heated and Ventilated Seats',
      'Rear Seat Entertainment',
      'Adaptive Variable Suspension'
    ]
  },
  {
    id: '6',
    name: 'Audi RS e-tron GT',
    make: 'Audi',
    model: 'RS e-tron GT',
    year: 2023,
    price: 145000,
    mileage: '2,100 km',
    engine: 'Electric',
    transmission: 'Automatic',
    condition: 'New',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1617814076668-11b2aa7ec220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'The Audi RS e-tron GT is an all-electric performance sedan that combines stunning design with exhilarating acceleration and cutting-edge technology.',
    features: [
      'Dual Electric Motors',
      '800-Volt Architecture',
      'Adaptive Air Suspension',
      'Matrix LED Headlights',
      'Bang & Olufsen Sound System',
      'Carbon Fiber Trim'
    ]
  }
];

export const allCars: Car[] = [
  ...featuredCars,
  {
    id: '7',
    name: 'Ferrari Roma',
    make: 'Ferrari',
    model: 'Roma',
    year: 2022,
    price: 250000,
    mileage: '1,200 km',
    engine: '3.9L V8',
    transmission: 'Automatic',
    condition: 'New',
    type: 'import',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '8',
    name: 'Lamborghini Urus',
    make: 'Lamborghini',
    model: 'Urus',
    year: 2023,
    price: 230000,
    mileage: '3,500 km',
    engine: '4.0L V8',
    transmission: 'Automatic',
    condition: 'New',
    type: 'import',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1669893907580-7f1b1d9b5a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '9',
    name: 'Bentley Continental GT',
    make: 'Bentley',
    model: 'Continental GT',
    year: 2022,
    price: 220000,
    mileage: '4,200 km',
    engine: '6.0L W12',
    transmission: 'Automatic',
    condition: 'Used',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80'
  },
  {
    id: '10',
    name: 'Rolls-Royce Ghost',
    make: 'Rolls-Royce',
    model: 'Ghost',
    year: 2023,
    price: 350000,
    mileage: '1,800 km',
    engine: '6.75L V12',
    transmission: 'Automatic',
    condition: 'New',
    type: 'import',
    location: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '11',
    name: 'Aston Martin DBS',
    make: 'Aston Martin',
    model: 'DBS',
    year: 2022,
    price: 325000,
    mileage: '2,500 km',
    engine: '5.2L V12',
    transmission: 'Automatic',
    condition: 'Used',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: '12',
    name: 'McLaren 720S',
    make: 'McLaren',
    model: '720S',
    year: 2021,
    price: 280000,
    mileage: '5,800 km',
    engine: '4.0L V8',
    transmission: 'Automatic',
    condition: 'Used',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '13',
    name: 'Maserati MC20',
    make: 'Maserati',
    model: 'MC20',
    year: 2023,
    price: 215000,
    mileage: '1,000 km',
    engine: '3.0L V6',
    transmission: 'Automatic',
    condition: 'New',
    type: 'import',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1617814076668-11b2aa7ec220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '14',
    name: 'Bugatti Chiron',
    make: 'Bugatti',
    model: 'Chiron',
    year: 2021,
    price: 3500000,
    mileage: '800 km',
    engine: '8.0L W16',
    transmission: 'Automatic',
    condition: 'Used',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1566024146175-4c8f9a63b2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
  },
  {
    id: '15',
    name: 'Cadillac Escalade',
    make: 'Cadillac',
    model: 'Escalade',
    year: 2023,
    price: 110000,
    mileage: '4,500 km',
    engine: '6.2L V8',
    transmission: 'Automatic',
    condition: 'New',
    type: 'import',
    location: 'United States',
    image: 'https://images.unsplash.com/photo-1549275301-c9d60945be6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '16',
    name: 'Toyota Land Cruiser',
    make: 'Toyota',
    model: 'Land Cruiser',
    year: 2022,
    price: 85000,
    mileage: '12,000 km',
    engine: '3.5L V6',
    transmission: 'Automatic',
    condition: 'Used',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1594978100945-8ba8241bd0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '17',
    name: 'Nissan Patrol',
    make: 'Nissan',
    model: 'Patrol',
    year: 2023,
    price: 75000,
    mileage: '8,500 km',
    engine: '5.6L V8',
    transmission: 'Automatic',
    condition: 'Used',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '18',
    name: 'GMC Yukon Denali',
    make: 'GMC',
    model: 'Yukon Denali',
    year: 2022,
    price: 90000,
    mileage: '15,000 km',
    engine: '6.2L V8',
    transmission: 'Automatic',
    condition: 'Used',
    type: 'export',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];