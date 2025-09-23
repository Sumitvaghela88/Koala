import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, User, ShoppingCart, Menu, X } from 'lucide-react';

const KoalaNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef({});


  // Add this at the top inside your KoalaNavigation component, replacing the current static center message

// State for rotating messages
const promoMessages = [
  "Free delivery on any mattress Australia wide",
  "World-class warranty up to 10 years",
  "Try it properly with our 120-nights trial – Learn more",
];
const [currentPromo, setCurrentPromo] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentPromo((prev) => (prev + 1) % promoMessages.length);
  }, 3000); // change every 3 seconds
  return () => clearInterval(interval);
}, []);

  // Navigation structure
  const navigationItems = [
    { title: 'Mattresses', href: '/collections/mattresses' },
    { title: 'Sofa Beds', href: '/collections/sofa-beds' },
    {
      title: 'Sofas',
      href: '/collections/all-sofas',
      hasDropdown: true,
      items: [
        'Sofas', 'Sofa Beds', 'Chaise Sofas', 'Corner Sofas',
        'Modular Sofas', 'Ottomans', 'Armchairs', 'Sofa Covers'

      ],
      image: [
        "//au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=140",
        "//au.koala.com/cdn/shop/collections/KSB_4G_OB_Q_12_6371ab10-99f0-4ced-a487-6ec3129ed3ea.png?v=1757981879&width=140",
        "//au.koala.com/cdn/shop/collections/5728f52223414ca8827313ef284077b0_ee5bee6d-97e3-4a65-8f6b-45220bf0baba.png?v=1742257301&width=140",
        "//au.koala.com/cdn/shop/collections/5339e3a318c889036c8a8730676e26ce.png?v=1727414941&width=140",
        "//au.koala.com/cdn/shop/files/ecd9f5d3357467ffae3d088e102b054f.png?v=1725498723&width=140",
        "//au.koala.com/cdn/shop/collections/ByronSB_3rdG_Ottoman_BlushSunset_3_1bff66ed-4c0a-49d5-871e-fe604c6689c5.png?v=1743474738&width=140",
        "//au.koala.com/cdn/shop/collections/bfa60f1787bbaab0c566e5e801a4ce80.png?v=1741828592&width=140",
        "//au.koala.com/cdn/shop/collections/8c19d14e86a86c19ce403b84ad12819c_d621ef82-9feb-4107-a708-0c5c8581212e.png?v=1727418138&width=140",
        "//au.koala.com/cdn/shop/files/e6077df4957a1c776616766922096db6.png?v=1725499106&width=140"



      ]
    },
    {
      title: 'Bedroom',
      href: '/collections/bedroom',
      hasDropdown: true,
      items: [
        'Mattresses',
        'Bed Bases',
        'Bundles',
        'Pillows',
        'Kids',
        'Bedside Tables',
        'Bed Covers & Sheets',
        'Rugs'
      ],
      image: [
        "https://au.koala.com/cdn/shop/collections/Queen_Plus_Mattress_11_1.webp?v=1727055087&width=3840",
        "https://au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=3840",
        "https://au.koala.com/cdn/shop/files/CushyLuxe_PenguinParade_Double_1_ca892c9b-5879-49a0-bf12-cd88f3e4adc2_1.png?v=1726272834&width=1632",
        "https://au.koala.com/cdn/shop/collections/20210518_DTP_Studio_AU_Pillow0867-2kNINfzBJJiYgKYjjpUthW.png?v=1752018313&width=3200",
        "https://au.koala.com/cdn/shop/collections/119b9239bdbbebbe0e2cad70a251e78e.png?v=1727417795&width=1920",
        "https://au.koala.com/cdn/shop/files/e3ebe3004e7cf22d8ad59e834dcf084b.png?v=1725498266&width=3840",
        "https://au.koala.com/cdn/shop/collections/8215438cc5a02988bff0ac91a9378639_7fa70ae0-1627-438f-bc28-28f1bbe925ff.png?v=1727415453&width=640",
        "https://au.koala.com/cdn/shop/collections/ff220ca59ff40373d7bb325344fa2ca5.png?v=1741826888&width=1920",
        "https://au.koala.com/cdn/shop/collections/protector.png?v=1727417882&width=768",
        "https://au.koala.com/cdn/shop/collections/8215438cc5a02988bff0ac91a9378639_7e68ef1a-fe8c-4386-87f0-84a1b0739112.png?v=1741827014&width=3200",
        "https://au.koala.com/cdn/shop/collections/8.KENKOA0069_20221019_OrganicCottonCart_CrumpleDuvet_OcealSaltGreyGum_0299_R1-1zXIv05MhKamYzJtsRYWKD.png?v=1750215885&width=640"
      ]
    },
    {
      title: 'Living Room',
      href: '/collections/living-room',
      hasDropdown: true,
      items: [
        'Sofa Beds', 'Sofas', 'Ottomans', 'Bookshelves',
        'Coffee & Side Tables', 'Rugs', 'Armchairs'
      ],
      image: [
        "https://au.koala.com/cdn/shop/collections/KSB_4G_OB_Q_12_6371ab10-99f0-4ced-a487-6ec3129ed3ea.png?v=1757981879&width=1880",
        "https://au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&width=1500",
        "https://au.koala.com/cdn/shop/collections/ByronSB_3rdG_Ottoman_BlushSunset_3_1bff66ed-4c0a-49d5-871e-fe604c6689c5.png?v=1743474738&width=1921",
        "https://au.koala.com/cdn/shop/collections/2716e936a2eec1f41bb0afd8f978e802.png?v=1727418508&width=3840",
        "https://au.koala.com/cdn/shop/collections/coffee_table.png?v=1727418664&width=3840",
        "https://au.koala.com/cdn/shop/collections/ff220ca59ff40373d7bb325344fa2ca5.png?v=1741826888&width=1920",
        "https://au.koala.com/cdn/shop/collections/bfa60f1787bbaab0c566e5e801a4ce80.png?v=1741828592&width=1920",
        "https://au.koala.com/cdn/shop/collections/9._Copy_of_KENKOA0049_2022_DD_SoftHomewares_Studio_Cushion_BeachBum_SurfersParadise_ForEtch_9219_R1-28QVx7HXwue2lJAKXXfo57.webp?v=1746164533&width=1920",
        "https://au.koala.com/cdn/shop/collections/8c19d14e86a86c19ce403b84ad12819c_d621ef82-9feb-4107-a708-0c5c8581212e.png?v=1727418138&width=1920",
        "https://au.koala.com/cdn/shop/collections/c60ff5ca7c8f773f34fea3f25e0f0048_bbb33ab0-ee83-4276-8b33-2584a14bba2e.png?v=1744673524&width=1921"
      ]
    },
    {
      title: 'Outdoor',
      href: '/collections/outdoor-furniture',
      hasDropdown: true,
      items: [
        'Outdoor Lounge Sets', 'Outdoor Dining Sets',
        'Outdoor Lounge Chairs', 'Outdoor Coffee Tables'
      ],
       image: [
        "https://au.koala.com/cdn/shop/files/041d07346266ec3f6edf1a4ee7de14c2.png?v=1725501870&width=1920",
        "https://au.koala.com/cdn/shop/files/fa13a7cda679550c50817a11d7446ed5.png?v=1725501756&width=1920",
        "https://au.koala.com/cdn/shop/files/5345895de78485128e31b5c5b46db2f8.png?v=1725501810&width=1920",
        "https://au.koala.com/cdn/shop/files/3fe2d629835e65c8e142b4131861db11.png?v=1725501616&width=1920",
        "https://au.koala.com/cdn/shop/files/66f21938eeec496633b6eda3f524a7e5.png?v=1725501760&width=1920",
        "https://au.koala.com/cdn/shop/files/e45601cf76481eb8e2b784ddc541d070.png?v=1725501645&width=1920"
       ]
    },
    { title: 'Bundles', href: '/collections/bundles-bedroom' },
    { title: 'Clearance', href: '/collections/clearance' }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#f9d997] relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-6 text-sm">
            {/* Left Side - About dropdown */}
            <div
              className="flex items-center relative"
              ref={el => dropdownRefs.current['about'] = el}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                About
                <ChevronDown
                  size={14}
                  className={`ml-1 transform transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* About Dropdown Menu */}
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999]">
                  <div className="py-2">
                    <a
                      href="/pages/about-us"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      About us
                    </a>
                    <a
                      href="/pages/koala-second-home"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Koala second home
                    </a>
                    <a
                      href="/pages/koala-pop-up"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Koala pop up
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Center - Promotional message */}
          <div className="hidden md:block text-gray-800 text-center font-sans text-sm transition-opacity duration-500">
  {promoMessages[currentPromo]}
</div>

            {/* Right Side - Utility links */}
            <div className="flex items-center space-x-4">
              <a href="/pages/contact" className="text-gray-700 hover:text-gray-900">FAQs</a>
              <a href="/pages/business-commercial" className="text-gray-700 hover:text-gray-900">Trade</a>
              <a href="/pages/accounts" className="text-gray-700 hover:text-gray-900">Manage my orders</a>

              {/* Country/Currency selector */}
              <div
                className="flex items-center relative"
                ref={el => dropdownRefs.current['currency'] = el}
                onMouseEnter={() => setActiveDropdown('currency')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-gray-900">
                  {/* Australian flag */}
                  <div className="w-4 h-3 mr-2 relative bg-blue-800 rounded-sm overflow-hidden">
                    <div className="absolute inset-0 bg-blue-800"></div>
                    {/* Union Jack corner */}
                    <div className="absolute top-0 left-0 w-2 h-1.5 bg-blue-900"></div>
                    {/* Stars representation */}
                    <div className="absolute top-0.5 left-2 w-0.5 h-0.5 bg-white rounded-full"></div>
                    <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`transform transition-transform duration-200 ${activeDropdown === 'currency' ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Currency Dropdown Menu */}
                {activeDropdown === 'currency' && (
                  <div className="absolute font-sans top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999]">
                    <div className="py-2">
                      <a
                        href="https://au.koala.com"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <div className="flex items-center">
                          <div className="w-4 h-3 mr-3 relative bg-blue-800 rounded-sm overflow-hidden">
                            <div className="absolute inset-0 bg-blue-800"></div>
                            <div className="absolute top-0 left-0 w-2 h-1.5 bg-blue-900"></div>
                            <div className="absolute top-0.5 left-2 w-0.5 h-0.5 bg-white rounded-full"></div>
                          </div>
                          <span>Australia</span>
                        </div>
                        <span className="text-gray-500">AUD $</span>
                      </a>
                      <a
                        href="https://us.koala.com"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        target="_blank"
                        rel="noopener"
                      >
                        <div className="flex items-center">
                          <div className="w-4 h-3 mr-3 relative bg-red-600 rounded-sm overflow-hidden">
                            <div className="absolute inset-0 bg-red-600"></div>
                            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-800"></div>
                            <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-center">
                              <div className="h-px bg-white"></div>
                              <div className="h-px bg-red-600"></div>
                              <div className="h-px bg-white"></div>
                            </div>
                          </div>
                          <span>United States</span>
                        </div>
                        <span className="text-gray-500">USD $</span>
                      </a>
                      <a
                        href="https://jp.koala.com"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        target="_blank"
                        rel="noopener"
                      >
                        <div className="flex items-center">
                          <div className="w-4 h-3 mr-3 relative bg-white rounded-sm overflow-hidden border border-gray-200">
                            <div className="absolute inset-0 bg-white"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                          </div>
                          <span>Japan</span>
                        </div>
                        <span className="text-gray-500">JPY ¥</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white font-sans sticky shadow-sm border-b border-gray-200  top-0 z-50">
        <div className="max-w  mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex   items-center  justify-between h-12">

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <svg
                  className="w-20 h-auto "
                  viewBox="0 0 787 228"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: '#68735c' }}
                >
                  {/* Full logo path */}
                  <path d="M231.647 81.5001C271.762 81.5001 304.421 114.964 304.421 154.355C304.421 194.443 271.762 227.907 231.647 227.907C191.532 227.907 158.872 194.443 158.872 154.355C158.872 114.964 191.532 81.5001 231.647 81.5001ZM391.362 81.5001C406.836 81.5001 421.069 87.7102 432.264 97.9234V89.2444C432.264 88.1149 432.72 87.0319 433.534 86.2333C434.347 85.4347 435.452 84.9859 436.601 84.9857H467.768C468.917 84.9859 470.019 85.4347 470.833 86.2333C471.647 87.0319 472.105 88.1149 472.105 89.2444V220.163C472.105 221.292 471.647 222.375 470.833 223.174C470.019 223.973 468.917 224.421 467.768 224.421H433.999C433.539 224.421 433.098 224.242 432.772 223.922C432.447 223.603 432.264 223.17 432.264 222.718V220.397C432.264 219.614 432.041 218.846 431.626 218.178C431.21 217.511 430.614 216.969 429.903 216.612C429.194 216.255 428.398 216.097 427.602 216.156C426.808 216.215 426.044 216.488 425.398 216.946C415.5 224.01 403.596 227.844 391.362 227.907C355.427 227.907 326.173 194.443 326.173 154.355C326.173 114.964 355.427 81.5001 391.362 81.5001ZM650.052 81.5001C665.527 81.5001 679.76 87.7102 690.955 97.9234V89.2444C690.955 88.1149 691.413 87.0319 692.227 86.2333C693.038 85.4347 694.143 84.9857 695.292 84.9857H726.459C727.608 84.9859 728.712 85.4347 729.526 86.2333C730.337 87.0319 730.796 88.1149 730.796 89.2444V220.163C730.796 221.292 730.337 222.375 729.526 223.174C728.712 223.973 727.608 224.421 726.459 224.421H692.69C692.229 224.421 691.789 224.242 691.463 223.922C691.138 223.603 690.955 223.17 690.955 222.718V220.397C690.955 219.614 690.735 218.846 690.316 218.178C689.901 217.511 689.305 216.969 688.596 216.612C687.885 216.255 687.089 216.097 686.295 216.156C685.499 216.215 684.735 216.488 684.089 216.946C674.193 224.01 662.287 227.844 650.052 227.907C614.118 227.907 584.864 194.443 584.864 154.355C584.864 114.964 614.118 81.5001 650.052 81.5001ZM770.141 191.254C774.768 191.254 778.724 192.897 782.012 196.183C785.3 199.439 786.945 203.379 786.945 208.004C786.945 212.628 785.3 216.583 782.012 219.87C778.724 223.125 774.768 224.753 770.141 224.753C765.543 224.753 761.6 223.11 758.312 219.824C755.054 216.538 753.427 212.598 753.427 208.004C753.427 203.409 755.054 199.469 758.312 196.183C761.6 192.897 765.543 191.254 770.141 191.254ZM550.795 0.000488818C551.947 0.000493486 553.048 0.449333 553.862 1.24795C554.676 2.04656 555.132 3.12968 555.132 4.25907V220.165C555.132 221.294 554.676 222.378 553.862 223.176C553.048 223.975 551.947 224.424 550.795 224.424H516.16C515.008 224.424 513.906 223.975 513.092 223.176C512.279 222.378 511.823 221.294 511.823 220.165V4.25907C511.823 3.12968 512.279 2.04656 513.092 1.24795C513.906 0.449328 515.008 0.000488818 516.16 0.000488818H550.795ZM39.3282 1.96223e-10C39.8976 -5.36663e-06 40.4618 0.110079 40.9878 0.324085C41.5142 0.538085 41.9919 0.851822 42.3948 1.24722C42.7975 1.64266 43.117 2.11219 43.3348 2.62886C43.5529 3.14547 43.6651 3.69916 43.6651 4.25832V137.973L95.5002 86.2586C95.9036 85.8561 96.3848 85.5363 96.9154 85.3178C97.446 85.0996 98.0157 84.9872 98.5908 84.9872H139.418C140.276 84.9872 141.115 85.2372 141.828 85.7052C142.542 86.1735 143.098 86.839 143.426 87.6176C143.754 88.3959 143.839 89.2526 143.671 90.0788C143.504 90.9049 143.09 91.6638 142.483 92.2592L85.5551 148.082L151.213 217.261C151.789 217.868 152.172 218.626 152.315 219.444C152.458 220.262 152.354 221.102 152.017 221.863C151.681 222.624 151.125 223.271 150.418 223.726C149.712 224.181 148.885 224.423 148.041 224.423H104.216C103.599 224.423 102.989 224.294 102.427 224.044C101.865 223.794 101.364 223.429 100.957 222.974L62.9047 180.409C61.4313 178.761 59.4812 177.593 57.3148 177.061C55.1481 176.529 52.8677 176.658 50.7776 177.431C48.6878 178.204 46.8875 179.584 45.6167 181.388C44.3459 183.191 43.6651 185.332 43.6651 187.525V220.164C43.6651 220.724 43.5529 221.277 43.3348 221.794C43.117 222.311 42.7975 222.78 42.3948 223.175C41.9919 223.571 41.5142 223.885 40.9878 224.099C40.4618 224.313 39.8976 224.423 39.3282 224.423H4.33696C3.76743 224.423 3.20329 224.313 2.6771 224.099C2.15095 223.885 1.67303 223.571 1.27033 223.175C0.867631 222.78 0.54806 222.311 0.330114 221.794C0.112171 221.277 -2.07432e-07 220.724 0 220.164V4.25832C1.42215e-05 3.69916 0.112202 3.14547 0.330114 2.62886C0.548065 2.11219 0.867613 1.64266 1.27033 1.24722C1.67304 0.851791 2.15119 0.538088 2.67735 0.324085C3.20349 0.110104 3.76748 -5.36631e-06 4.33696 1.96217e-10L39.3282 1.96223e-10ZM770.141 194.494C766.457 194.494 763.29 195.818 760.641 198.465C757.994 201.112 756.669 204.292 756.669 208.004C756.669 211.715 757.994 214.895 760.641 217.542C763.29 220.189 766.457 221.513 770.141 221.513C773.854 221.513 777.034 220.189 779.683 217.542C782.363 214.895 783.702 211.715 783.702 208.004C783.702 204.292 782.363 201.112 779.683 198.465C777.034 195.818 773.854 194.494 770.141 194.494ZM771.1 199.469C772.682 199.469 773.944 199.941 774.888 200.884C775.832 201.797 776.305 202.983 776.305 204.444C776.305 206.786 775.101 208.293 772.697 208.962L778.862 216.492H774.981L768.999 209.236H767.995V216.492H764.752V199.469H771.1ZM767.995 206.452H770.734C771.433 206.452 771.996 206.269 772.424 205.904C772.88 205.539 773.108 205.052 773.108 204.444C773.108 203.805 772.895 203.318 772.469 202.983C772.044 202.649 771.465 202.481 770.734 202.481H767.995V206.452ZM231.647 119.147C212.477 119.147 197.567 134.834 197.567 154.355C197.567 174.224 212.477 190.26 231.647 190.26C250.463 190.26 265.727 174.224 265.727 154.355C265.727 134.834 250.463 119.147 231.647 119.147ZM401.092 119.147C381.922 119.147 367.01 134.834 367.01 154.355C367.01 174.225 381.922 190.259 401.092 190.259C419.907 190.259 435.171 174.225 435.171 154.355C435.171 134.834 419.907 119.147 401.092 119.147ZM659.783 119.147C640.612 119.147 625.704 134.834 625.704 154.355C625.704 174.225 640.612 190.259 659.783 190.259C678.598 190.259 693.862 174.225 693.862 154.355C693.862 134.834 678.598 119.147 659.783 119.147ZM324.232 3.73482C333.242 0.768881 342.812 -0.194787 352.249 0.913599C353.379 10.18 352.397 19.577 349.377 28.4257C346.242 37.583 340.984 45.9001 334.018 52.7211C327.069 59.5621 318.601 64.725 309.274 67.8028C300.264 70.7688 290.694 71.7324 281.257 70.6242C280.127 61.3575 281.109 51.9607 284.131 43.112C287.279 33.9607 292.535 25.6464 299.488 18.8165C306.444 11.9866 314.913 6.82536 324.232 3.73482Z" fill="currentColor"></path>


                </svg>
                <span className="sr-only">Koala</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center">
                {navigationItems.map((item, index) => (
                  <div key={index} className="relative" ref={el => dropdownRefs.current[index] = el}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="relative flex items-center text-gray-900 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors duration-200 group"
                          onClick={() => handleDropdownToggle(index)}
                          onMouseEnter={() => setActiveDropdown(index)}
                        >
                          {item.title}
                          <ChevronDown
                            size={14}
                            className={`ml-1 transform transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''
                              }`}
                          />
                          {/* Hover animation line */}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                        </button>

                        
                    
                       {/* Dropdown Menu */}
                        {activeDropdown === index && (
                          <div
                            className="fixed inset-0 bg-white  animate-dropdown-enter"
                            onMouseLeave={() => setActiveDropdown(null)}
                            style={{ 
                              top: '90px', // Start after the navigation bar
                              animation: 'slideDown 0.3s ease-out forwards',
                            }}
                          >
                            <div className="h-full overflow-y-auto">
                              <div className="max-w-7xl mx-auto font-sans px-12 py-4 opacity-2 animate-fade-in" style={{ animation: 'fadeIn 0.4s ease-out 0.1s forwards' }}>
                                {/* Header Section */}
                                <div className="flex items-center justify-between mb-8">
                                  <h2 className="text-4xl font-bold text-gray-900">{item.title}</h2>
                                  <a
                                    href={item.href}
                                    className="inline-block px-8 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors text-sm"
                                  >
                                    SHOP ALL {item.title.toUpperCase()}
                                  </a>
                                </div>
                                
                                {/* Full Grid Layout for Items with Images */}
                                <div className="grid grid-cols-4 gap-12 mb-16">
                                  {item.items.map((subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href="#"
                                      className="group flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300 transform translate-y-8 opacity-0"
                                      style={{ 
                                        animation: `slideInUp 0.6s ease-out ${0.1 * subIndex}s forwards`
                                      }}
                                    >
                                      {/* Large Image Container */}
                                      <div className="w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                                        {item.image && item.image[subIndex] ? (
                                          <img
                                            src={item.image[subIndex]}
                                            alt={subItem}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                              e.target.style.display = 'none';
                                              e.target.nextSibling.style.display = 'flex';
                                            }}
                                          />
                                        ) : null}
                                        {/* Fallback placeholder */}
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm" style={{display: 'none'}}>
                                          {subItem}
                                        </div>
                                      </div>
                                      {/* Text Label */}
                                      <span className="text-lg text-gray-900 font-semibold leading-tight group-hover:text-green-600 transition-colors">
                                        {subItem}
                                      </span>
                                    </a>
                                  ))}
                                </div>

                                {/* Additional content rows if needed */}
                                <div className="grid grid-cols-2 gap-12">
                                  {/* Could add more featured products or categories here */}
                                </div>
                              </div>
                            </div>

                            {/* Close overlay on click outside content */}
                            <div 
                              className="absolute inset-0 -z-10" 
                              onClick={() => setActiveDropdown(null)}
                            ></div>

                            {/* Custom CSS Animations */}
                            <style jsx>{`
                              @keyframes slideDown {
                                from {
                                  opacity: 0;
                                  transform: translateY(-100vh);
                                }
                                to {
                                  opacity: 1;
                                  transform: translateY(0);
                                }
                              }
                              
                              @keyframes fadeIn {
                                from {
                                  opacity: 0;
                                  transform: translateY(-30px);
                                }
                                to {
                                  opacity: 1;
                                  transform: translateY(0);
                                }
                              }
                              
                              @keyframes slideInUp {
                                from {
                                  opacity: 0;
                                  transform: translateY(40px);
                                }
                                to {
                                  opacity: 1;
                                  transform: translateY(0);
                                }
                              }
                            `}</style>
                          </div>
                        )}    </>
                    ) : (
                      <a
                        href={item.href}
                        className="relative text-gray-900 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors duration-200 group"
                      >
                        {item.title}
                        {/* Hover animation line */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-md">
                <Search size={20} />
              </button>

              {/* Account */}
              <a href="/account" className="p-2 text-gray-600 hover:text-gray-900 rounded-md">
                <User size={20} />
              </a>

              {/* Cart */}
              <a href="/cart" className="relative p-2 text-gray-600 hover:text-gray-900 rounded-md">
                <ShoppingCart size={20} />

              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        onClick={() => handleDropdownToggle(`mobile-${index}`)}
                      >
                        {item.title}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform duration-200 ${activeDropdown === `mobile-${index}` ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {activeDropdown === `mobile-${index}` && (
                        <div className="pl-4 mt-2 space-y-1">
                          <a
                            href={item.href}
                            className="block px-3 py-2 text-sm font-medium text-green-800 hover:bg-gray-50 rounded-md"
                          >
                            Shop All {item.title}
                          </a>
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default KoalaNavigation;