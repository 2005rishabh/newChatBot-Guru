import { Product } from '../types';

export const products: Product[] = [
  // Laptops
  {
    id: 'laptop-1',
    name: 'ASUS ROG Zephyrus G14',
    category: 'Laptop',
    brand: 'ASUS',
    price: 149999,
    description: '14" Gaming Laptop with AMD Ryzen 9 and RTX 4090',
    specifications: {
      'Processor': 'AMD Ryzen 9 7945HX',
      'GPU': 'NVIDIA RTX 4090 16GB',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Display': '14" 2K 165Hz'
    },
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'laptop-2',
    name: 'MacBook Pro 16',
    category: 'Laptop',
    brand: 'Apple',
    price: 249999,
    description: '16" Professional Laptop with M2 Max',
    specifications: {
      'Processor': 'Apple M2 Max',
      'GPU': '38-core GPU',
      'RAM': '32GB Unified',
      'Storage': '1TB SSD',
      'Display': '16" Liquid Retina XDR'
    },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'laptop-3',
    name: 'Dell XPS 15',
    category: 'Laptop',
    brand: 'Dell',
    price: 179999,
    description: '15" Premium Laptop with OLED Display',
    specifications: {
      'Processor': 'Intel i9-13900H',
      'GPU': 'RTX 4070 8GB',
      'RAM': '32GB DDR5',
      'Storage': '1TB SSD',
      'Display': '15.6" 4K OLED'
    },
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'laptop-4',
    name: 'Lenovo Legion Pro 7',
    category: 'Laptop',
    brand: 'Lenovo',
    price: 189999,
    description: '16" Gaming Powerhouse',
    specifications: {
      'Processor': 'AMD Ryzen 9 7945HX',
      'GPU': 'RTX 4080 12GB',
      'RAM': '32GB DDR5',
      'Storage': '2TB SSD',
      'Display': '16" QHD+ 240Hz'
    },
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'laptop-5',
    name: 'Razer Blade 14',
    category: 'Laptop',
    brand: 'Razer',
    price: 159999,
    description: 'Compact Gaming Laptop',
    specifications: {
      'Processor': 'AMD Ryzen 9 7940HS',
      'GPU': 'RTX 4070 8GB',
      'RAM': '16GB DDR5',
      'Storage': '1TB SSD',
      'Display': '14" QHD 165Hz'
    },
    imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80'
  },

  // CPUs
  {
    id: 'cpu-1',
    name: 'AMD Ryzen 9 7950X',
    category: 'CPU',
    brand: 'AMD',
    price: 54999,
    description: '16-core Zen 4 Desktop Processor',
    specifications: {
      'Cores': '16',
      'Threads': '32',
      'Base Clock': '4.5 GHz',
      'Boost Clock': '5.7 GHz',
      'TDP': '170W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cpu-2',
    name: 'Intel Core i9-13900K',
    category: 'CPU',
    brand: 'Intel',
    price: 57999,
    description: 'Flagship 13th Gen Desktop CPU',
    specifications: {
      'Cores': '24 (8P+16E)',
      'Threads': '32',
      'Base Clock': '3.0 GHz',
      'Boost Clock': '5.8 GHz',
      'TDP': '125W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cpu-3',
    name: 'AMD Ryzen 7 7800X3D',
    category: 'CPU',
    brand: 'AMD',
    price: 42999,
    description: 'Gaming-focused CPU with 3D V-Cache',
    specifications: {
      'Cores': '8',
      'Threads': '16',
      'Base Clock': '4.2 GHz',
      'Boost Clock': '5.0 GHz',
      'TDP': '120W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1592664858143-c0f459c6afaf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cpu-4',
    name: 'Intel Core i5-13600K',
    category: 'CPU',
    brand: 'Intel',
    price: 31999,
    description: 'Mid-range Gaming CPU',
    specifications: {
      'Cores': '14 (6P+8E)',
      'Threads': '20',
      'Base Clock': '3.5 GHz',
      'Boost Clock': '5.1 GHz',
      'TDP': '125W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cpu-5',
    name: 'AMD Ryzen 5 7600X',
    category: 'CPU',
    brand: 'AMD',
    price: 24999,
    description: 'Mainstream Gaming CPU',
    specifications: {
      'Cores': '6',
      'Threads': '12',
      'Base Clock': '4.7 GHz',
      'Boost Clock': '5.3 GHz',
      'TDP': '105W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
  },

  // GPUs
  {
    id: 'gpu-1',
    name: 'NVIDIA RTX 4090',
    category: 'GPU',
    brand: 'NVIDIA',
    price: 169999,
    description: 'Flagship Gaming Graphics Card',
    specifications: {
      'VRAM': '24GB GDDR6X',
      'Boost Clock': '2.52 GHz',
      'CUDA Cores': '16384',
      'Power Consumption': '450W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gpu-2',
    name: 'AMD RX 7900 XTX',
    category: 'GPU',
    brand: 'AMD',
    price: 109999,
    description: 'High-end AMD Graphics Card',
    specifications: {
      'VRAM': '24GB GDDR6',
      'Boost Clock': '2.5 GHz',
      'Stream Processors': '12288',
      'Power Consumption': '355W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372345-d1c0a7273f58?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gpu-3',
    name: 'NVIDIA RTX 4080',
    category: 'GPU',
    brand: 'NVIDIA',
    price: 129999,
    description: 'High-end Gaming Graphics',
    specifications: {
      'VRAM': '16GB GDDR6X',
      'Boost Clock': '2.51 GHz',
      'CUDA Cores': '9728',
      'Power Consumption': '320W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372599-36f237c5a0c9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gpu-4',
    name: 'AMD RX 7800 XT',
    category: 'GPU',
    brand: 'AMD',
    price: 69999,
    description: 'Mid-range Gaming Graphics',
    specifications: {
      'VRAM': '16GB GDDR6',
      'Boost Clock': '2.4 GHz',
      'Stream Processors': '3840',
      'Power Consumption': '263W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372702-8d43bf89e7dc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gpu-5',
    name: 'NVIDIA RTX 4070',
    category: 'GPU',
    brand: 'NVIDIA',
    price: 59999,
    description: 'Mid-range Ray Tracing GPU',
    specifications: {
      'VRAM': '12GB GDDR6X',
      'Boost Clock': '2.48 GHz',
      'CUDA Cores': '5888',
      'Power Consumption': '200W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372745-d0bdab7f7495?auto=format&fit=crop&w=800&q=80'
  },

  // RAM
  {
    id: 'ram-1',
    name: 'Corsair Dominator Platinum RGB',
    category: 'RAM',
    brand: 'Corsair',
    price: 24999,
    description: '32GB DDR5-6000 RGB Memory',
    specifications: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '6000MHz',
      'Latency': 'CL36',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ram-2',
    name: 'G.Skill Trident Z5 RGB',
    category: 'RAM',
    brand: 'G.Skill',
    price: 21999,
    description: '32GB DDR5-6400 Memory',
    specifications: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '6400MHz',
      'Latency': 'CL32',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-5d0fee6f0639?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ram-3',
    name: 'Kingston Fury Beast',
    category: 'RAM',
    brand: 'Kingston',
    price: 15999,
    description: '32GB DDR5-5200 Memory',
    specifications: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '5200MHz',
      'Latency': 'CL40',
      'RGB': 'No'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-5d0fee6f0640?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ram-4',
    name: 'Crucial Ballistix MAX',
    category: 'RAM',
    brand: 'Crucial',
    price: 18999,
    description: '32GB DDR4-4400 Memory',
    specifications: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '4400MHz',
      'Latency': 'CL19',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-5d0fee6f0641?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ram-5',
    name: 'TeamGroup T-Force Delta',
    category: 'RAM',
    brand: 'TeamGroup',
    price: 12999,
    description: '32GB DDR4-3600 Memory',
    specifications: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '3600MHz',
      'Latency': 'CL18',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-5d0fee6f0642?auto=format&fit=crop&w=800&q=80'
  },

  // SSDs
  {
    id: 'ssd-1',
    name: 'Samsung 990 PRO',
    category: 'SSD',
    brand: 'Samsung',
    price: 19999,
    description: '2TB NVMe PCIe 4.0 SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '7450 MB/s',
      'Write Speed': '6900 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ssd-2',
    name: 'WD Black SN850X',
    category: 'SSD',
    brand: 'Western Digital',
    price: 17999,
    description: '2TB Gaming NVMe SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '7300 MB/s',
      'Write Speed': '6600 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200970-2b65d56bd16c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ssd-3',
    name: 'Crucial P5 Plus',
    category: 'SSD',
    brand: 'Crucial',
    price: 14999,
    description: '2TB NVMe PCIe 4.0 SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '6600 MB/s',
      'Write Speed': '5000 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200971-2b65d56bd16d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ssd-4',
    name: 'Seagate FireCuda 530',
    category: 'SSD',
    brand: 'Seagate',
    price: 18999,
    description: '2TB Gaming NVMe SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '7300 MB/s',
      'Write Speed': '6900 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200972-2b65d56bd16e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ssd-5',
    name: 'ADATA XPG GAMMIX S70',
    category: 'SSD',
    brand: 'ADATA',
    price: 15999,
    description: '2TB NVMe PCIe 4.0 SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '7400 MB/s',
      'Write Speed': '6400 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200973-2b65d56bd16f?auto=format&fit=crop&w=800&q=80'
  },

  // Keyboards
  {
    id: 'kb-1',
    name: 'Logitech G Pro X',
    category: 'Keyboard',
    brand: 'Logitech',
    price: 14999,
    description: 'TKL Mechanical Gaming Keyboard',
    specifications: {
      'Type': 'Mechanical',
      'Switches': 'GX Hot-swappable',
      'Backlight': 'RGB',
      'Layout': 'TKL'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kb-2',
    name: 'Razer Huntsman V2',
    category: 'Keyboard',
    brand: 'Razer',
    price: 16999,
    description: 'Optical Mechanical Keyboard',
    specifications: {
      'Type': 'Optical Mechanical',
      'Switches': 'Razer Purple',
      'Backlight': 'RGB',
      'Layout': 'Full-size'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741302-dc798b83add4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kb-3',
    name: 'Corsair K100 RGB',
    category: 'Keyboard',
    brand: 'Corsair',
    price: 19999,
    description: 'Premium Gaming Keyboard',
    specifications: {
      'Type': 'Mechanical',
      'Switches': 'OPX',
      'Backlight': 'RGB',
      'Layout': 'Full-size'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741303-dc798b83add5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kb-4',
    name: 'Ducky One 3',
    category: 'Keyboard',
    brand: 'Ducky',
    price: 12999,
    description: 'High-quality Mechanical Keyboard',
    specifications: {
      'Type': 'Mechanical',
      'Switches': 'Cherry MX',
      'Backlight': 'RGB',
      'Layout': 'Full-size'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741304-dc798b83add6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kb-5',
    name: 'SteelSeries Apex Pro',
    category: 'Keyboard',
    brand: 'SteelSeries',
    price: 17999,
    description: 'Adjustable Mechanical Keyboard',
    specifications: {
      'Type': 'Mechanical',
      'Switches': 'OmniPoint',
      'Backlight': 'RGB',
      'Layout': 'Full-size'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741305-dc798b83add7?auto=format&fit=crop&w=800&q=80'
  },

  // Mice
  {
    id: 'mouse-1',
    name: 'Logitech G Pro X Superlight',
    category: 'Mouse',
    brand: 'Logitech',
    price: 12999,
    description: 'Ultra-lightweight Wireless Mouse',
    specifications: {
      'DPI': '25600',
      'Weight': '63g',
      'Wireless': 'Yes',
      'Battery Life': '70 hours'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mouse-2',
    name: 'Razer Viper Ultimate',
    category: 'Mouse',
    brand: 'Razer',
    price: 13999,
    description: 'Ambidextrous Wireless Mouse',
    specifications: {
      'DPI': '20000',
      'Weight': '74g',
      'Wireless': 'Yes',
      'Battery Life': '70 hours'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050088-3793815479dc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mouse-3',
    name: 'SteelSeries Prime Wireless',
    category: 'Mouse',
    brand: 'SteelSeries',
    price: 11999,
    description: 'Professional Gaming Mouse',
    specifications: {
      'DPI': '18000',
      'Weight': '80g',
      'Wireless': 'Yes',
      'Battery Life': '100 hours'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050089-3793815479dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mouse-4',
    name: 'Zowie EC2',
    category: 'Mouse',
    brand: 'Zowie',
    price: 6999,
    description: 'Esports Gaming Mouse',
    specifications: {
      'DPI': '3200',
      'Weight': '90g',
      'Wireless': 'No',
      'Sensor': '3360'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050090-3793815479de?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mouse-5',
    name: 'Glorious Model O',
    category: 'Mouse',
    brand: 'Glorious',
    price: 5999,
    description: 'Ultra-lightweight Gaming Mouse',
    specifications: {
      'DPI': '12000',
      'Weight': '67g',
      'Wireless': 'No',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050091-3793815479df?auto=format&fit=crop&w=800&q=80'
  },

  // Monitors
  {
    id: 'monitor-1',
    name: 'LG 27GP950-B',
    category: 'Monitor',
    brand: 'LG',
    price: 69999,
    description: '27" 4K UHD Gaming Monitor',
    specifications: {
      'Resolution': '3840x2160',
      'Refresh Rate': '160Hz',
      'Response Time': '1ms',
      'Panel': 'Nano IPS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'monitor-2',
    name: 'Samsung Odyssey G7',
    category: 'Monitor',
    brand: 'Samsung',
    price: 54999,
    description: '32" QHD Curved Gaming Monitor',
    specifications: {
      'Resolution': '2560x1440',
      'Refresh Rate': '240Hz',
      'Response Time': '1ms',
      'Panel': 'VA'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224155-c4a3942d3ad0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'monitor-3',
    name: 'ASUS ROG Swift PG279QM',
    category: 'Monitor',
    brand: 'ASUS',
    price: 59999,
    description: '27" QHD Gaming Monitor',
    specifications: {
      'Resolution': '2560x1440',
      'Refresh Rate': '240Hz',
      'Response Time': '1ms',
      'Panel': 'IPS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224156-c4a3942d3ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'monitor-4',
    name: 'Alienware AW3423DW',
    category: 'Monitor',
    brand: 'Alienware',
    price: 109999,
    description: '34" QD-OLED Ultrawide Monitor',
    specifications: {
      'Resolution': '3440x1440',
      'Refresh Rate': '175Hz',
      'Response Time': '0.1ms',
      'Panel': 'QD-OLED'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224157-c4a3942d3ad2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'monitor-5',
    name: 'MSI Optix MAG274QRF-QD',
    category: 'Monitor',
    brand: 'MSI',
    price: 44999,
    description: '27" QHD Gaming Monitor',
    specifications: {
      'Resolution': '2560x1440',
      'Refresh Rate': '165Hz',
      'Response Time': '1ms',
      'Panel': 'Rapid IPS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224158-c4a3942d3ad3?auto=format&fit=crop&w=800&q=80'
  },

  // Headphones
  {
    id: 'headphone-1',
    name: 'Sony WH-1000XM5',
    category: 'Headphones',
    brand: 'Sony',
    price: 29999,
    description: 'Premium Wireless ANC Headphones',
    specifications: {
      'Driver': '40mm',
      'Battery': '30 hours',
      'ANC': 'Yes',
      'Bluetooth': '5.2'
    },
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'headphone-2',
    name: 'SteelSeries Arctis Pro',
    category: 'Headphones',
    brand: 'SteelSeries',
    price: 24999,
    description: 'Hi-Res Gaming Headset',
    specifications: {
      'Driver': '40mm',
      'Frequency': '10-40000 Hz',
      'Microphone': 'Retractable',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1505740106531-4243f3831c78?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'headphone-3',
    name: 'Razer BlackShark V2 Pro',
    category: 'Headphones',
    brand: 'Razer',
    price: 19999,
    description: 'Wireless Gaming Headset',
    specifications: {
      'Driver': '50mm',
      'Battery': '24 hours',
      'THX': 'Yes',
      'Weight': '320g'
    },
    imageUrl: 'https://images.unsplash.com/photo-1505740106531-4243f3831c79?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'headphone-4',
    name: 'Logitech G Pro X',
    category: 'Headphones',
    brand: 'Logitech',
    price: 17999,
    description: 'Professional Gaming Headset',
    specifications: {
      'Driver': '50mm',
      'Surround': '7.1',
      'Microphone': 'Blue Voice',
      'Weight': '320g'
    },
    imageUrl: 'https://images.unsplash.com/photo-1505740106531-4243f3831c80?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'headphone-5',
    name: 'HyperX Cloud Alpha',
    category: 'Headphones',
    brand: 'HyperX',
    price: 9999,
    description: 'Comfortable Gaming Headset',
    specifications: {
      'Driver': '50mm',
      'Frequency': '13-27000 Hz',
      'Microphone': 'Detachable',
      'Weight': '336g'
    },
    imageUrl: 'https://images.unsplash.com/photo-1505740106531-4243f3831c81?auto=format&fit=crop&w=800&q=80'
  },

  // Speakers
  {
    id: 'speaker-1',
    name: 'Harman Kardon SoundSticks 4',
    category: 'Speakers',
    brand: 'Harman Kardon',
    price: 24999,
    description: '2.1 Channel Sound System',
    specifications: {
      'Power': '140W',
      'Frequency': '40Hz-20kHz',
      'Subwoofer': '100W',
      'Connectivity': 'Bluetooth 5.0'
    },
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'speaker-2',
    name: 'Logitech G560',
    category: 'Speakers',
    brand: 'Logitech',
    price: 19999,
    description: 'RGB Gaming Speakers',
    specifications: {
      'Power': '240W',
      'RGB': 'Yes',
      'Surround': 'DTS:X',
      'Bluetooth': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'speaker-3',
    name: 'Razer Nommo Pro',
    category: 'Speakers',
    brand: 'Razer',
    price: 29999,
    description: 'Premium Gaming Speakers',
    specifications: {
      'Power': '420W',
      'THX': 'Yes',
      'Subwoofer': 'Downward-firing',
      'RGB': 'Chroma'
    },
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'speaker-4',
    name: 'Creative Pebble V3',
    category: 'Speakers',
    brand: 'Creative',
    price: 4999,
    description: 'Compact USB-C Speakers',
    specifications: {
      'Power': '8W',
      'USB-C': 'Yes',
      'Bluetooth': '5.0',
      'Controls': 'Touch'
    },
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be60?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'speaker-5',
    name: 'Audioengine A2+',
    category: 'Speakers',
    brand: 'Audioengine',
    price: 27999,
    description: 'Premium Desktop Speakers',
    specifications: {
      'Power': '60W',
      'DAC': '24-bit',
      'Inputs': 'USB/RCA/3.5mm',
      'Frequency': '65Hz-22kHz'
    },
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be61?auto=format&fit=crop&w=800&q=80'
  },

  // Webcams
  {
    id: 'webcam-1',
    name: 'Logitech Brio 4K',
    category: 'Webcam',
    brand: 'Logitech',
    price: 19999,
    description: '4K Ultra HD Webcam',
    specifications: {
      'Resolution': '4K UHD',
      'FPS': '60fps at 1080p',
      'FOV': '90°',
      'HDR': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'webcam-2',
    name: 'Razer Kiyo Pro',
    category: 'Webcam',
    brand: 'Razer',
    price: 16999,
    description: 'Professional Streaming Webcam',
    specifications: {
      'Resolution': '1080p',
      'FPS': '60fps',
      'FOV': '103°',
      'Low-light': 'STARVIS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1623949556304-b0d17d198864?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'webcam-3',
    name: 'Elgato Facecam',
    category: 'Webcam',
    brand: 'Elgato',
    price: 18999,
    description: 'Premium Streaming Camera',
    specifications: {
      'Resolution': '1080p',
      'FPS': '60fps',
      'FOV': '82°',
      'Sensor': 'Sony STARVIS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1623949556305-b0d17d198865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'webcam-4',
    name: 'AVerMedia PW315',
    category: 'Webcam',
    brand: 'AVerMedia',
    price: 9999,
    description: 'Streaming Webcam',
    specifications: {
      'Resolution': '1080p',
      'FPS': '60fps',
      'FOV': '95°',
      'Privacy': 'Cover'
    },
    imageUrl: 'https://images.unsplash.com/photo-1623949556306-b0d17d198866?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'webcam-5',
    name: 'Dell UltraSharp',
    category: 'Webcam',
    brand: 'Dell',
    price: 21999,
    description: '4K HDR Webcam',
    specifications: {
      'Resolution': '4K',
      'HDR': 'Yes',
      'AI Framing': 'Yes',
      'FOV': '90°'
    },
    imageUrl: 'https://images.unsplash.com/photo-1623949556307-b0d17d198867?auto=format&fit=crop&w=800&q=80'
  },

  // Docks
  {
    id: 'dock-1',
    name: 'CalDigit TS4',
    category: 'Dock',
    brand: 'CalDigit',
    price: 34999,
    description: 'Thunderbolt 4 Dock',
    specifications: {
      'Ports': '18 ports',
      'Power': '98W',
      'Display': '8K@60Hz',
      'Thunderbolt': '40Gbps'
    },
    imageUrl: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dock-2',
    name: 'Razer Thunderbolt 4 Dock',
    category: 'Dock',
    brand: 'Razer',
    price: 29999,
    description: 'Chroma RGB Dock',
    specifications: {
      'Ports': '10 ports',
      'Power': '90W',
      'RGB': 'Chroma',
      'Thunderbolt': '40Gbps'
    },
    imageUrl: 'https://images.unsplash.com/photo-1625842268585-8f3296236762?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dock-3',
    name: 'Anker 777',
    category: 'Dock',
    brand: 'Anker',
    price: 24999,
    description: 'Thunderbolt Docking Station',
    specifications: {
      'Ports': '12 ports',
      'Power': '85W',
      'Display': 'Dual 4K@60Hz',
      'Material': 'Aluminum'
    },
    imageUrl: 'https://images.unsplash.com/photo-1625842268586-8f3296236763?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dock-4',
    name: 'Corsair TBT100',
    category: 'Dock',
    brand: 'Corsair',
    price: 26999,
    description: 'Thunderbolt 3 Dock',
    specifications: {
      'Ports': '11 ports',
      'Power': '85W',
      'Display': 'Dual 4K@60Hz',
      'Audio': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1625842268587-8f3296236764?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dock-5',
    name: 'OWC Thunderbolt Hub',
    category: 'Dock',
    brand: 'OWC',
    price: 19999,
    description: 'Compact Thunderbolt 4 Hub',
    specifications: {
      'Ports': '4 ports',
      'Power': '60W',
      'Display': '8K support',
      'Size': 'Compact'
    },
    imageUrl: 'https://images.unsplash.com/photo-1625842268588-8f3296236765?auto=format&fit=crop&w=800&q=80'
  }
];