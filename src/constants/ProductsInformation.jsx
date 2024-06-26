const productsInformation = [
    {
        company: 'Inovance',
        products: [
            {
                id: 'monarch01',
                heading: 'NICE 3000+',
                subheading: '',
                images: [
                    {item: '/products/monarch/10.webp', type: 'img'},
                    {item: '/products/monarch/11.webp', type: 'img'},
                    {item: '/products/monarch/12.webp', type: 'img'},
                    {item: '/products/monarch/13.webp', type: 'img'},
                    {item: '/products/monarch/14.webp', type: 'img'},
                    {item: '/products/monarch/15.webp', type: 'img'},
                    {item: '/products/monarch/16.webp', type: 'img'},
                    {item: '/products/monarch/17.webp', type: 'img'},
                ],
                resources: [
                    {item: '/products/monarch/NICE3000.pdf', type: 'pdf', title: 'Brochure'},
                ],
                features: [
                    'Redundancy control via multi-CPUs equipped with CANbus, Modbus, and GSM communications technology',
                    'Displacement calculation methods derive the N velocity profile to achieve optimum direct-to-point distance control',
                    'Simple 2-wire serial communications to commission duplex group control',
                    'Group control of up to 8 elevators is based on fuzzy logic control theory',
                    'In-built real-time clock to facilitate time-sharing control and elevator management',
                    'Flexible emergency backup power; 220 Vac power input makes emergency evacuation easy with automatic light load direction search',
                    'Automatic identification operation between short-floors',
                    'Handheld operation tools: mini keypad, PC to facilitate easy commissioning',
                    '60 fault codes to facilitate easy diagnostics',

                ],
                specifications: [
                    'Serial technology',
                    'EN81-20 Safety Certified',
                    'Enhanced reliability with conformal coating, protects against humidity and dust pollution',
                    'Operation in high ambient temperatures',
                    'Standard: 48 floors, full collective (full serial connection)',
                    'Duplex onboard group control (CANbus serial communication)',
                    'Automatic door control mode',
                    'Selectable fireman operation',
                    'Supports 1 ph. 220 Vac UPS (quasi & sine wave) for rescue',
                    'operation with intelligent light load direction search',
                    'Comprehensive trip diagnostics',
                    'Supports PM gearless and asynchronous geared traction machines',
                    'Smooth ride performance',
                    '"Direct To Floor" technology',
                    'Rapid commissioning step through sequence',
                    'Anti-rollback without any external load cell (gearless machines)',
                    'Pre-torque function (analog signal from load cell for geared machines)',
                    'Flexible programmable I/O\'s',
                    'Static auto tuning for asynchronous and synchronous machines (without brake opening)',
                ],
                description: [
                    'The NICE3000+ is a cutting-edge integrated solution specifically designed for elevators, providing a comprehensive suite of components and advanced features to ensure safe, efficient, and reliable operation. Developed with a strong emphasis on safety, this solution is fully compliant with the stringent EN81-20/50 standards.',
                    'At the heart of the NICE3000+ lies the powerful car top board, which acts as the central control unit, seamlessly integrating with a range of other components such as car call boards, display panels, door controllers, and group control boards. These components work in harmony to deliver a smooth and intuitive user experience, with features like automatic door control, selectable fireman operation, and intelligent light load direction search for rescue operations with UPS backup.',
                    'The system offers exceptional flexibility, supporting various encoder types, including SinCos, EnDat, and incremental encoders, as well as a wide range of programmable I/O configurations. The NICE3000+ also boasts advanced features like anti-rollback protection for gearless machines, pre-torque function for geared machines, and static auto-tuning capabilities for both asynchronous and synchronous motors.',
                    'Furthermore, the NICE3000+ incorporates a range of accessories, such as remote keypads, arrival annunciators, and maintenance tools, enabling efficient commissioning, monitoring, and maintenance. With its modular design and scalable architecture, the NICE3000 can be tailored to meet the specific requirements of any elevator project, making it an ideal choice for building owners, operators, and maintenance providers alike.',
                ]
            },
            {
                id: 'monarch02',
                heading: 'NICE 1000+',
                subheading: '',
                images: [
                    {item: '/products/monarch/20.webp', type: 'img'},
                    {item: '/products/monarch/21.webp', type: 'img'},
                    {item: '/products/monarch/22.webp', type: 'img'},
                    {item: '/products/monarch/23.webp', type: 'img'},
                    {item: '/products/monarch/24.webp', type: 'img'},
                    {item: '/products/monarch/25.webp', type: 'img'},
                    {item: '/products/monarch/26.webp', type: 'img'},
                    {item: '/products/monarch/27.webp', type: 'img'},
                ],
                resources: [
                    {item: '/products/monarch/NICE1000.pdf', type: 'pdf', title: 'Brochure'},
                ],
                features: [
                    'Standard: 8 floors - expansion option for 16 floors',
                    'Maximum speed: 1.5 m/sec',
                    'Duplex onboard group control (CANbus serial communication)',
                    'Double digit, 7-segment display (parallel connection)',
                    'Selectable door control mode (manual, semi-auto, auto)',
                    'Selectable fireman operation',
                    'Synchronous (PM gearless machine) or asynchronous (geared machine)',
                    'Single-phase 220 V UPS rescue mode operation ready with automatic light load search',
                    'Comprehensive trip diagnostics',
                    'Output frequency: 0.0 to 100.0 Hz',
                    'Static auto-tuning for asynchronous and synchronous machines (without brake opening)',
                ],
                specifications: [
                    'Enhanced reliability with conformal coating, protects against humidity and dust pollution',
                    'Operation in high ambient temperatures',
                    'Supports synchronous (PM gearless machines) and asynchronous (geared machines)',
                    'Smooth ride performance',
                    '"Direct To Floor" technology',
                    'Rapid commissioning step through sequence',
                    'Anti-rollback without any external load cell (gearless machines)',
                    'Pre-torque function (analog signal from load cell for geared machines)',
                    'Flexible programmable I/O\'s',
                    'Static auto tuning for asynchronous and synchronous machines (without brake opening)',
                    'Standard: 8 floors, full collective; expansion option: up to 16 floors (conventional parallel wiring)',
                    'Duplex onboard group control (CANbus serial communication)',
                    'Selectable door control mode (manual, semi-automatic, automatic)',
                    'Selectable fireman operation',
                    'Single-phase 220 Vac UPS (quasi & sine wave) rescue mode operation ready with automatic light load search',
                    'Comprehensive trip diagnostics',
                    'Output frequency 0.0~99.0 Hz',
                ],
                description: [
                    'The Nice1000 is an integrated elevator control solution designed for gearless (PM synchronous) and geared (asynchronous) machines. It offers enhanced reliability with conformal coatings to protect against humidity and dust, along with smooth ride performance and "Direct To Floor" technology. Key features include operation at high ambient temperatures up to 45°C, anti-rollback without an external load cell for gearless machines, pre-torque function for geared machines, a wide 323-528VAC operating voltage range, flexible programmable I/Os, and static auto-tuning.',
                    'The base model supports 8 floors full collective, expandable to 16 floors with optional I/O expansion. It enables simplex or duplex group control via CANbus. Door control modes include manual, semi-automatic and automatic for various door types like swing, telescopic and bi-fold. Other capabilities include fire service, UPS rescue mode, comprehensive diagnostics, arrival gongs/voice announcements, and hot-pluggable remote LCD/LED keypads in multiple languages.',
                    'Encoder interface options cover SinCos absolute, EnDat, incremental quadrature and single-ended types for gearless PM and geared induction motors. The solution is powered by the Nice1000 AC drive rated from 2.2-45kW at 380-480VAC input. Overall, it provides a comprehensive, flexible and high-performance integrated elevator control package.',
                ]
            },
            {
                id: 'monarch03',
                heading: 'NICE 100+',
                subheading: '',
                images: [
                    {item: '/products/monarch/30.webp', type: 'img'},
                    {item: '/products/monarch/31.webp', type: 'img'},
                    {item: '/products/monarch/32.webp', type: 'img'},
                    {item: '/products/monarch/33.webp', type: 'img'},
                    {item: '/products/monarch/34.webp', type: 'img'},
                    {item: '/products/monarch/35.webp', type: 'img'},
                ],
                resources: [
                    {item: '/products/monarch/NICE100.pdf', type: 'pdf', title: 'Brochure'},
                ],
                features: [
                    'Open loop integrated elevator control solution',
                    'Maximum speed: 1.0 m/sec',
                    'Selectable door control mode (auto, manual, semi-auto)',
                    'Standard: 8 floors - expansion option for 16 floors',
                    'Programmable I/Os',
                    'Robust and reliable relay-based outputs',
                    'Comprehensive trip diagnostics',
                    'Rescue function ready with external single-phase 220 V UPS'
                ],
                specifications: [
                    'Enhanced reliability with conformal coating, protects against humidity and dust pollution',
                    'Operation in high ambient temperatures',
                    '-- Controller --',
                    'Supports 6 floor collective, expansion option up to 12 floors',
                    'Selectable door control mode (automatic, manual,semi-automatic)',
                    'Flexible & programmable I/O\'s',
                    'Robust on-board relay for outputs',
                    'Comprehensive trip diagnostics',
                    'Supports double digit 7 segments, Binary, Grey codes display functions',
                    'Built-in automatic rescue operation feature',
                    '-- Inverter --',
                    'Supports open loop asynchronous geared machine',
                    'Smooth ride performance',
                    'Integrated brake and motor output contactors control with monitoring',
                    'Quick and Easy setup with factory default settings',
                    '6-Independent S-Ramps',
                    'Better levelling accuracy',
                    '220Vac UPS supported rescue operation with Light load direction sensing',
                ],
                description: [
                    'The NICE100+ Series is an open loop integrated elevator control solution from Inovance Technology Co., Ltd. It is designed for elevators with speeds up to 1.00 m/sec and supports up to 12 floors with full collective control. The solution includes a base unit for 6 floors and an expansion I/O module for up to 12 floors.',
                    'The controller features include selectable door control modes, flexible and programmable I/Os, robust on-board relays for outputs, comprehensive trip diagnostics, support for various display types, and a built-in automatic rescue operation feature. The integrated inverter supports open loop asynchronous geared machines, offering smooth ride performance, better leveling accuracy, and enhanced reliability with conformal coating protection against humidity and dust.',
                    'The solution is compatible with Windows 7/10 and comes with PC-Tools software for simplified startup, diagnosis, and backup. It also supports a remote LED/LCD keypad with optional memory and multilingual support. The product line offers various power ratings and frame sizes to accommodate different elevator configurations.',
                ]
            },
            {
                id: 'monarch04',
                heading: 'MD 500L',
                subheading: '',
                images: [
                    {item: '/products/monarch/40.webp', type: 'img'},
                    {item: '/products/monarch/41.webp', type: 'img'},
                    {item: '/products/monarch/42.webp', type: 'img'},
                    {item: '/products/monarch/43.webp', type: 'img'},
                    {item: '/products/monarch/44.webp', type: 'img'},
                    {item: '/products/monarch/45.webp', type: 'img'}
                ],
                resources: [
                    {item: '/products/monarch/MD500L.pdf', type: 'pdf', title: 'Brochure'},
                    {item: '/products/monarch/MD380L.pdf', type: 'pdf', title: 'Brochure Old'},
                ],
                features: [
                    'Open loop elevator AC drive',
                    'Smooth ride performance',
                    'Integrated brake control',
                    '5-independent S-Ramps',
                    'Programmable DC-injection braking',
                    'Simplified parameters for easy start-up',
                    'Comprehensive trip diagnostics',
                    'Automatic torque boost',
                    'Slip compensation',
                    'Flexible programmable I/O connection',
                    'Output frequency: 100 Hz',
                    'Built-in dynamic braking unit',
                ],
                specifications: [
                    'Enhanced reliability with conformal coating, protects against humidity and dust pollution',
                    'Operation in high ambient temperatures',
                    'UPS/ARD (sine & quasi square type) rescue light load direction sensing',
                    'Easy setup with default factory setting, gets you started quickly',
                    'Programmable DC injection braking',
                    'Onboard Modbus-RTU',
                    'Comprehensive trip diagnostics',
                    'Output frequency 0.00 ~ 100.00 Hz',
                    
                ],
                description: [
                    'The MD380L by Inovance is an open loop AC elevator drive designed for smooth and efficient elevator operation. This product offers a range of features to enhance performance and ease of use in elevator applications.',
                    'Key features include smooth ride performance, integrated brake control, and UPS/ARD rescue functionality with light load direction sensing. It utilizes 5 independent S-Ramps and offers easy setup with default factory settings for quick start-up. The drive supports programmable DC injection braking and has a removable cooling fan for simple maintenance.',
                    'The MD380L series comes in various models with power ratings from 3.7kW to 15kW. It operates on a wide input voltage range of 323 to 528 VAC and can handle output frequencies up to 100 Hz. The drive boasts enhanced reliability with conformal coating to protect against humidity and dust, and can operate in high ambient temperatures up to 45°C.',
                    'Additional features include automatic torque boost, slip compensation, flexible programmable I/Os, onboard Modbus-RTU communication, comprehensive trip diagnostics, and a built-in dynamic braking unit. The product is designed for easy integration and maintenance, with options like a hot-pluggable remote keypad available. Overall, the MD380L aims to provide a reliable and efficient solution for elevator drive applications.',
                ]
            },
            {
                id: 'monarch05',
                heading: 'NICE 900',
                subheading: '',
                images: [
                    {item: '/products/monarch/50.webp', type: 'img'},
                    {item: '/products/monarch/51.webp', type: 'img'}
                ],
                features: [
                    'Variable frequency drive tailored for elevator doors',
                    'Excellent performance due to advanced vector control technology',
                    'Motor parameter auto-tuning',
                    'Enhanced accuracy control via innovative synchronization machine angle identification technology',
                    'Offers encoder original point identification technology, adaptable to general A, B, Z signal incremental encoders ',
                    'Adopt best quality devices on NICE900 integrated controller, like latest 32-bit DSP up to 150 MHz',
                    'Compact design: 2 in 1 integrated controller has both controller and inverter functions, applicable to both asynchronous and synchronous motors',
                    'In-built keypad for easy setup and maintenance',
                    
                ],
                specifications: [
                    'Enhanced reliability with conformal coating, protects against humidity and dust pollution',
                    'Operation in high ambient temperatures',
                    'Power Rating - 200W, 400W, 750W',
                    '1-Phase, 220-240Vac Input Supply 50Hz/60Hz',
                    '3-Phase, 220-240Vac Output Motor Supply',
                    'Application - Elevator Car Door, Subway Car Door and Various Door Control Applications',
                    '-- Asynchronous Motor --',
                    '1) Open Loop Vector Control',
                    'Without Encoder (using slow Down, End stop Limit Switch)',
                    'Low PPR encoder (Minimum 10 PPR)',
                    '2) Closed Loop Vector Control',
                    'With Encoder Feedback (512~10,000 PPR)',
                    '-- Synchronous Motor --',
                    'Closed Loop Control with A, B, Z Signals Encoder',
                    
                ],
                description: [
                    'This state-of-the-art variable frequency drive is specifically engineered for elevator door systems, offering unparalleled performance and efficiency. At its core, the drive utilizes advanced vector control technology, ensuring precise and smooth door operations. The system\'s motor parameter auto-tuning capability optimizes performance for each unique installation.',
                    'A standout feature is the innovative synchronization machine angle identification technology, which dramatically enhances control accuracy. This is complemented by encoder original point identification technology, making the drive compatible with a wide range of incremental encoders using standard A, B, and Z signals.',
                    'The drive\'s brain is powered by a cutting-edge 32-bit DSP running at up to 150 MHz, part of the high-quality NICE900 integrated controller. This powerful processing capability enables real-time adjustments and superior responsiveness.',
                    'Designed with space efficiency in mind, this 2-in-1 integrated controller combines both controller and inverter functions in a single compact unit. Its versatility shines through in its ability to work seamlessly with both asynchronous and synchronous motors, providing flexibility for various elevator configurations.',
                    'Maintenance and setup are streamlined thanks to the in-built keypad, allowing for easy on-site adjustments and troubleshooting. This user-friendly interface ensures that technicians can quickly configure and fine-tune the system, minimizing downtime and optimizing elevator door performance.',
                ]
            },
            {
                id: 'monarch06',
                heading: 'ME 320LN',
                subheading: '',
                images: [
                    {item: '/products/monarch/60.webp', type: 'img'},
                    {item: '/products/monarch/61.webp', type: 'img'},
                    {item: '/products/monarch/62.webp', type: 'img'},
                    {item: '/products/monarch/63.webp', type: 'img'},
                    {item: '/products/monarch/64.webp', type: 'img'},
                    {item: '/products/monarch/65.webp', type: 'img'},
                ],
                resources: [
                    {item: '/products/monarch/ME320LN.pdf', type: 'pdf', title: 'Brochure'},
                ],
                features: [
                    'Closed loop AC elevator drive',
                    'Flexible, programmable I/O\'s',
                    'Onboard Modbus-RTU',
                    'Comprehensive trip diagnostics',
                    'Built-in dynamic braking unit',
                    'Anti-rollback function for PMSM gearless machines',
                    'Pre-torque function (analog signal from load cell for geared machines)',
                    'Removable cooling fan',
                    'Multilingual keypad',
                    'Optional remote keypad',
                    'Optional memory',
                    'Conformal coating',
                    'Operating voltage range: 323-528 V',
                    'PC-based software',
                    'Operates in high ambient temperatures: 45 ̊C',
                    'Smooth ride performance',
                    'Five independent S-ramps',
                    'Easy set-up with default factory setting',
                    'Short floor and direct approach functions',
                    '60 Vdc rescue function ready',
                    'Light load direction for rescue function',
                    
                ],
                specifications: [
                    'Enhanced reliability with conformal coating, protects against humidity and dust pollution',
                    'Operation in high ambient temperatures',
                    'Smooth ride performance',
                    'Integrated brake control',
                    'Easy setup with default factory setting for rapid commissioning', 
                    '5 independent S-Ramps',
                    'Short-floor function',
                    'Direct approach function',
                    'Light load direction sensing',
                    '60 Vdc rescue function',
                    '220 Vac UPS (sine & quasi square type)',
                    'Non-rotational encoder phase offset tuning',
                    'Flexible programmable I/O\'s',
                    'Onboard Modbus-RTU',
                    'Comprehensive trip diagnostics',
                    'Built-in dynamic braking unit',
                    'Anti-rollback function for PMSM gearless machines',
                    'Pre-torque function',
                    '(Analog signal from load cell for geared machines)',
                    
                ],
                description: [
                    'The ME320LN "e" Series by Inovance is a closed loop AC elevator drive designed for both gearless and geared elevator applications. It offers smooth ride performance and easy setup with default factory settings for rapid commissioning. Key features include integrated brake control, 5 independent S-Ramps, short-floor function, direct approach function, and light load direction sensing.',
                    'The drive can operate in high ambient temperatures up to 45°C and has enhanced reliability with conformal coating to protect against humidity and dust. It supports both 60V DC rescue function and 220V AC UPS operation. The multilingual keypad comes with memory and supports English, Turkish, Italian and Russian languages.',
                    'Available in power ratings from 3.7kW to 30kW, the ME320LN has a wide operating voltage range of 323-528 VAC. It features flexible programmable I/Os, onboard Modbus-RTU, comprehensive trip diagnostics, and a built-in dynamic braking unit. The drive supports various encoder types for both permanent magnet and induction motors.',
                    'With over 2 million installations worldwide, Inovance provides a proven solution for elevator control with the ME320LN drive, offering reliability, performance and easy installation for elevator applications.',
                ]
            },
        ]
    },
    {
        company: 'Tectronics',
        products: [
            {
                id: 'tectronics01',
                heading: 'MRL Tectronics Motor',
                subheading: '',
                images: [{item: '/products/tectronics/10.webp', type: 'img'}],
                features: [
                    '-- Gearless Technology --',
                    'With the use of Gearless traction machine, Ride can be smoother, Energy-saving can be improved, and environment-friendly features can be enhanced.',
                    '-- No Machine Room Require --',
                    'Tectronics’smachinesareremarkablylightweightandspace-effcient, comparedto traditional traction elevators. Less structural support is required, and easier access for machine room service enhances safety standards.',
                    '-- Energy Saving --',
                    'The optimized power factor of the Tectronics Machines means it utilizes less power and produces lesser heat than traditional traction elevators, with energy savings of up to 40% (compared to conventional geared elevators.)',
                    '-- Noise Free --',
                    'Tectronics gearless elevator machines works without any type of vibration or noise, ensuring an ultimately peaceful, comfortable and smooth performance.',
                    '-- Compact in Size --',
                    'Tectronics gearless elevator machines are compact in size, minimizing space requirements by eliminating the traction machine gearbox.',
                ],
                specifications: [
                ],
                description: [
                    'Gearless traction machines are modern elevator systems that directly connect the motor to the drive sheave, eliminating the need for a reduction gear. This direct-drive design is increasingly used in the world\'s tallest structures due to its numerous advantages.',
                    'The gearless technology offers smoother rides, improved energy efficiency, and enhanced environmental friendliness. Tectronic\'s machines are notably lightweight and space-efficient compared to traditional traction elevators, requiring less structural support and allowing easier access for maintenance, which improves safety standards.',
                    'One significant benefit is energy savings, with gearless elevators consuming up to 40% less power than conventional geared systems. This efficiency is due to an optimized power factor, resulting in lower heat production and reduced energy consumption.',
                    'Gearless elevator machines operate without vibration or noise, ensuring a peaceful, comfortable, and smooth performance. Their compact size, achieved by eliminating the gearbox, minimizes space requirements in buildings.',
                    'These features make gearless traction machines an attractive option for modern construction projects, offering improved performance, energy efficiency, and space utilization while maintaining high safety standards and passenger comfort.',
                ]
            },
            {
                id: 'tectronics02',
                heading: 'MRL Tectronics Motor',
                subheading: '',
                images: [{item: '/products/tectronics/20.webp', type: 'img'}],
                features: [
                    
                ],
                specifications: [
                ],
                description: [
                    
                ]
            },
            {
                id: 'tectronics03',
                heading: 'MRL Tectronics Motor',
                subheading: '',
                images: [{item: '/products/tectronics/30.webp', type: 'img'}],
                features: [
                    
                ],
                specifications: [
                ],
                description: [
                    
                ]
            },
            {
                id: 'tectronics04',
                heading: 'MRL Tectronics Motor',
                subheading: '',
                images: [{item: '/products/tectronics/40.webp', type: 'img'}],
                features: [
                    
                ],
                specifications: [
                ],
                description: [
                    ''
                ]
            },
        ]
    },
    {
        company: 'Asian Elevators',
        products: [
            {
                id: 'asian01',
                heading: 'SMART IOT ELEVATOR',
                subheading: '',
                images: [
                    {item: '/products/asian/10.webp', type: 'img'},
                    {src: 'https://www.youtube.com/embed/xSv8eNjxdPM', title: 'Asian Smart Elevator IoT Solution', type: 'iframe'}
                ],
                features: [
                    'Get real time lift updates from anywhere',
                    'Easy remote lift controls',
                    'Instant power ON/OFF from the app',
                    'Test ARD operation remotely',
                    'Automatic lift health check',
                    'Get notified on fault detection',
                ],
                specifications: [
                    'Works with any kind of elevator controller.',
                    'Supports Parallel Interface.',
                    'Operating Voltage: 24V DC.',
                    'Inputs: Safety and 7-Segment Signals.',
                    'Output: Isolated Relay Output.',
                    'Wifi Internet Connection Required',
                    'Web Application that can run across multiple platforms',
                ],
                description: [
                    'The SMART IOT ELEVATOR by Asian Elevators is a cutting-edge solution that revolutionizes elevator management and monitoring. This innovative system seamlessly integrates with any existing elevator controller, offering unparalleled control and oversight from anywhere in the world.',
                    'At its core, the SMART IOT ELEVATOR provides real-time updates on lift status, allowing property managers and maintenance teams to stay informed at all times. The system\'s remote control capabilities enable instant power management and testing of ARD (Automatic Rescue Device) operations, enhancing both efficiency and safety.',
                    'One of the standout features is the automatic lift health check, which proactively monitors the elevator\'s performance. Coupled with instant fault detection notifications, this ensures rapid response to any issues, minimizing downtime and improving overall reliability.',
                    'The system operates on a 24V DC power supply and interfaces with existing elevator infrastructure through parallel connections. It interprets safety signals and 7-segment displays, providing a comprehensive overview of the elevator\'s status. The isolated relay output ensures safe and reliable control.',
                    'Requiring only a Wi-Fi internet connection, the SMART IOT ELEVATOR is managed through a versatile web application compatible with various platforms. This user-friendly interface puts powerful elevator management tools at your fingertips, streamlining operations and enhancing user experience.',
                    
                ]
            },
        ]
    },
    {
        company: 'Adco Controls',
        products: [
            {
                id: 'adco01',
                heading: 'AD009 Controller',
                subheading: '',
                images: [{item: '/products/adco/10.webp', type: 'img'}],
                features: [
                    'No of Stop: AD009 8 Stop Down Collective and 6 Stop Collective Selective.',
                    '+ AD9007 24 Stop Down Collective and 16 Stop Collective Selective',
                    'Duplex Operation using just two Wire communication no extra hardware require',
                    'Speed: Up to 2 m/sec',
                ],
                specifications: [
                    
                ],
                description: [
                    'The AD009 Controller by Asian Elevators Controls And Automation is a state-of-the-art elevator control system designed to deliver optimal performance and reliability. With advanced technology and precision engineering, this controller sets new standards in the industry. It offers seamless integration with various elevator components, ensuring smooth and efficient operation. The AD009 Controller prioritizes safety, incorporating robust safety features to protect passengers and prevent accidents. Additionally, it is equipped with cutting-edge connectivity options, allowing for remote monitoring and diagnostics, reducing downtime and improving maintenance efficiency. The AD009 Controller is a testament to our commitment to providing innovative solutions that enhance elevator performance, user experience, and overall building efficiency. Choose the AD009 Controller for elevators that are safe, reliable, and equipped with the latest technological advancements.'
                ]
            },
            {
                id: 'adco02',
                heading: 'AD007 Controller',
                subheading: '',
                images: [{item: '/products/adco/20.webp', type: 'img'}],
                features: [
                    'Max no of Stop: 6 No',
                    'Main Supply: 440V AC',
                    'Safety Signal: 110V AC',
                    'Push Button and Call register LED signal: 12VDC or 24VDC / Speed 0.6m/Sec.',
                    'Manual Single Speed or V3F',
                    'Function auto/attend, fire, auto fan, stop, inspection etc…',
                ],
                specifications: [
                    'Works with any kind of elevator controller.',
                    'Supports Parallel Interface.',
                    'Operating Voltage: 24V DC.',
                    'Inputs: Safety and 7-Segment Signals.',
                    'Output: Isolated Relay Output.',
                    'Wifi Internet Connection Required',
                    'Web Application that can run across multiple platforms',
                ],
                description: [
                    'The AD007 - Manual Lift Card by Asian Elevators Controls And Automation is a cutting-edge solution for manual control of elevator systems. Designed with precision and reliability in mind, this innovative lift card provides users with a seamless and efficient method to operate elevators in case of emergencies or power outages.',
                    'With the AD007 - Manual Lift Card, users can easily take control of elevator functions manually, ensuring uninterrupted vertical transportation even in challenging situations. The card is equipped with advanced technology and user-friendly features, allowing for smooth and safe operation.',
                    'Asian Elevators Controls And Automation, a leading supplier of elevator equipment, has leveraged its 35+ years of industry experience to develop this state-of-the-art product. The AD007 - Manual Lift Card reflects our commitment to precision engineering, integrated solutions, and the delivery of cutting-edge technology.',
                    'Choose the AD007 - Manual Lift Card for reliable and efficient manual control of elevators, ensuring the safety and convenience of passengers in any circumstance.',
                ]
            },
            {
                id: 'adco03',
                heading: 'AD009 Card',
                subheading: 'Control Card',
                images: [
                    {item: '/products/adco/30.webp', type: 'img'},
                    {item: '/products/adco/31.webp', type: 'img'},
                    {item: '/products/adco/32.webp', type: 'img'},
                ],
                features: [
                    'Max no of Stop: 6 No',
                    'Main Supply: 440V AC',
                    'Safety Signal: 110V AC',
                    'Push Button and Call register LED signal: 12VDC or 24VDC / Speed 0.6m/Sec.',
                    'Manual Single Speed or V3F',
                    'Function auto/attend, fire, auto fan, stop, inspection etc…',
                ],
                specifications: [
                    'Works with any kind of elevator controller.',
                    'Supports Parallel Interface.',
                    'Operating Voltage: 24V DC.',
                    'Inputs: Safety and 7-Segment Signals.',
                    'Output: Isolated Relay Output.',
                    'Wifi Internet Connection Required',
                    'Web Application that can run across multiple platforms',
                ],
                description: [
                    'The Ad007-G+5 Drive Mother Board Card is a cutting-edge electronic component designed by Asian Elevators Controls And Automation. This advanced motherboard card serves as the central control unit for elevator drives, ensuring smooth and efficient operation. With precision engineering and the latest technology, the Ad007-G+5 Drive Mother Board Card offers reliability, accuracy, and seamless integration.',
                    'This motherboard card is specifically designed for elevator applications and is compatible with various elevator systems. It provides enhanced control and monitoring capabilities, allowing for precise speed regulation, efficient energy management, and comprehensive diagnostics. With its robust design and intelligent features, the Ad007-G+5 Drive Mother Board Card ensures optimal performance and safety in elevator operations.',
                    'Asian Elevators Controls And Automation takes pride in delivering high-quality products, and the Ad007-G+5 Drive Mother Board Card is no exception. With its innovative design and reliability, this motherboard card is a testament to our commitment to excellence in elevator equipment.',
                ]
            },
            {
                id: 'adco04',
                heading: 'AD007 Card',
                subheading: 'Control Card',
                images: [
                    {item: '/products/adco/40.webp', type: 'img'},
                    {item: '/products/adco/41.webp', type: 'img'},
                    {item: '/products/adco/42.webp', type: 'img'},
                ],
                features: [
                    'Max no of Stop: 6 No',
                    'Main Supply: 440V AC',
                    'Safety Signal: 110V AC',
                    'Push Button and Call register LED signal: 12VDC or 24VDC / Speed 0.6m/Sec.',
                    'Manual Single Speed or V3F',
                    'Function auto/attend, fire, auto fan, stop, inspection etc…',
                ],
                specifications: [
                    'Works with any kind of elevator controller.',
                    'Supports Parallel Interface.',
                    'Operating Voltage: 24V DC.',
                    'Inputs: Safety and 7-Segment Signals.',
                    'Output: Isolated Relay Output.',
                    'Wifi Internet Connection Required',
                    'Web Application that can run across multiple platforms',
                ],
                description: [
                    'The Ad007-G+5 Drive Mother Board Card is a cutting-edge electronic component designed by Asian Elevators Controls And Automation. This advanced motherboard card serves as the central control unit for elevator drives, ensuring smooth and efficient operation. With precision engineering and the latest technology, the Ad007-G+5 Drive Mother Board Card offers reliability, accuracy, and seamless integration.',
                    'This motherboard card is specifically designed for elevator applications and is compatible with various elevator systems. It provides enhanced control and monitoring capabilities, allowing for precise speed regulation, efficient energy management, and comprehensive diagnostics. With its robust design and intelligent features, the Ad007-G+5 Drive Mother Board Card ensures optimal performance and safety in elevator operations.',
                    'Asian Elevators Controls And Automation takes pride in delivering high-quality products, and the Ad007-G+5 Drive Mother Board Card is no exception. With its innovative design and reliability, this motherboard card is a testament to our commitment to excellence in elevator equipment.',
                ]
            },
            {
                id: 'adco05',
                heading: 'ELC-13 Card',
                subheading: 'Control Card',
                images: [
                    {item: '/products/adco/50.webp', type: 'img'},
                    {item: '/products/adco/51.webp', type: 'img'}
                ],
                features: [
                    'Max no of Stop: 6 No',
                    'Main Supply: 440V AC',
                    'Safety Signal: 110V AC',
                    'Push Button and Call register LED signal: 12VDC or 24VDC / Speed 0.6m/Sec.',
                    'Manual Single Speed or V3F',
                    'Function auto/attend, fire, auto fan, stop, inspection etc…',
                ],
                specifications: [
                    'Works with any kind of elevator controller.',
                    'Supports Parallel Interface.',
                    'Operating Voltage: 24V DC.',
                    'Inputs: Safety and 7-Segment Signals.',
                    'Output: Isolated Relay Output.',
                    'Wifi Internet Connection Required',
                    'Web Application that can run across multiple platforms',
                ],
                description: [
                    'The Ad007-G+5 Drive Mother Board Card is a cutting-edge electronic component designed by Asian Elevators Controls And Automation. This advanced motherboard card serves as the central control unit for elevator drives, ensuring smooth and efficient operation. With precision engineering and the latest technology, the Ad007-G+5 Drive Mother Board Card offers reliability, accuracy, and seamless integration.',
                    'This motherboard card is specifically designed for elevator applications and is compatible with various elevator systems. It provides enhanced control and monitoring capabilities, allowing for precise speed regulation, efficient energy management, and comprehensive diagnostics. With its robust design and intelligent features, the Ad007-G+5 Drive Mother Board Card ensures optimal performance and safety in elevator operations.',
                    'Asian Elevators Controls And Automation takes pride in delivering high-quality products, and the Ad007-G+5 Drive Mother Board Card is no exception. With its innovative design and reliability, this motherboard card is a testament to our commitment to excellence in elevator equipment.',
                ]
            },
        ]
    },
    {
        company: 'Accessories',
        products: [
            {
                id: 'accessories01',
                heading: '110v Safety Card',
                subheading: '',
                images: [
                    {item: '/products/accessories/10.webp', type: 'img'}
                ],
                features: [
                    
                ],
                specifications: [
                    
                ],
                description: [
                    ''
                ]
            },
            {
                id: 'accessories02',
                heading: 'Auto Gate Lock',
                subheading: '',
                images: [
                    {item: '/products/accessories/20.webp', type: 'img'}
                ],
                features: [
                    
                ],
                specifications: [
                    
                ],
                description: [
                    ''
                ]
            },
            {
                id: 'accessories03',
                heading: 'Blower',
                subheading: '',
                images: [
                    {item: '/products/accessories/30.webp', type: 'img'}
                ],
                features: [
                    
                ],
                specifications: [
                    
                ],
                description: [
                    ''
                ]
            },
        ]
    }
]

const productsHighlightsInformation = ['asian01', 'monarch01', 'monarch02', 'monarch03', 'monarch04', 'monarch05', 'monarch06', 'tectronics01','tectronics02','tectronics03','tectronics04', 'adco01' ]

export { productsInformation, productsHighlightsInformation }