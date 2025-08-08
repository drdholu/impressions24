import { useState } from 'react'
import bg from '../images/bg-13.png'
import logo from '../images/impressions text logo.png'
import paperTexture from '../images/texture-2.png'
import dividerLine from '../images/divider-3.png'
import { ChevronRight, Clapperboard, PenLine, Calculator, ChartNoAxesCombined, Palette, BookOpen, Landmark, Briefcase, Brush, FileText, Users, DollarSign, Camera, Globe, ShoppingBag, Settings, Megaphone, Code2, Film } from 'lucide-react'

const iconMap = {
  'Accounts': Landmark,
  'Corporate Outreach Group': Briefcase,
  'Decor': Palette,
  'Design': PenLine,
  'Documentation': FileText,
  'Events and Proshows': Users,
  'Finance and Sponsorships': DollarSign,
  'Media': Clapperboard,
  'Marketing': ChartNoAxesCombined,
  'Print and Purchase': ShoppingBag,
  'Production': Settings,
  'Publicity and Registrations': Megaphone,
  'Web': Code2,
  'VFX': Camera
}

const NameItem = ({ name, index, isVisible }) => {
  return (
    <div
      className={`transform transition-all duration-300 ease-out ${isVisible
        ? 'translate-y-0 opacity-100'
        : 'translate-y-2 opacity-0'
        }`}
      style={{
        transitionDelay: `${index * 50}ms`
      }}
    >
      <div className="py-2 px-4">
        <p
          className="text-gray-800 text-md flex items-center gap-2"
          style={{
            fontFamily: 'JMH Typewriter, monospace',
            letterSpacing: '0.5px'
          }}
        >
          <span className="text-yellow-700">{index + 1}.</span> {name}
        </p>
      </div>
    </div>
  )
}

const PortfolioSection = ({ title, names, innerWidth }) => {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = iconMap[title] || Briefcase

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-start px-5 py-4 bg-yellow-50 hover:bg-yellow-100 transition-colors duration-300 shadow-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <Icon className="text-red-700f black" size={innerWidth < 400 ? 16 : 20} />
          </div>
          <div>
            <h2
              className="text-[16px] sm:text-xl font-semibold tracking-wide"
              style={{
                fontFamily: 'JMH Typewriter Bold, monospace',
                fontWeight: 'bolder',
                color: "black",
              }}
            >
              {title}
            </h2>
          </div>
        </div>
        <div
          className={`transform transition-transform duration-300 text-yellow-700 flex-shrink-0 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
        >
          <ChevronRight size={22} />
        </div>
      </div>

      <div
        className={`transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="ml-6">
          {names.map((name, idx) => (
            <NameItem
              key={idx}
              name={name}
              index={idx}
              isVisible={isOpen}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const CoordinatorInductionResults = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setInnerWidth(window.innerWidth)
  })

  const getResponsiveStyles = () => {
    const baseStyles = {
      border: '2px solid #b91c1c',
      margin: '20px',
      padding: '40px',
      width: 'calc(100% - 40px)',
      height: 'calc(100% - 40px)',
      boxSizing: 'border-box',
      backgroundColor: '#ffffffff',
      backgroundBlendMode: 'multiply',
      backgroundImage: `url(${paperTexture})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '400px 400px',
    };

    if (innerWidth < 400) {
      return {
        ...baseStyles,
        padding: '5px',
        margin: '10px',
        width: 'calc(100% - 20px)',
        height: 'calc(100% - 20px)',
      };
    }
    return baseStyles;
  }

  const portfolios = [
    {
      title: 'Accounts',
      names: [
        'Soham Gole',
        'Amruta Yadav',
        'Shariva Gaikwad',
        'Darshana Kulkarni'
      ]
    },
    {
      title: 'Corporate Outreach Group',
      names: [
        'Rutuja Tajave',
        'Tejas Kadam',
        'Mansi Gattani',
        'Sakshi Deokar',
        'Shreya Suryavanshi',
        'Ayushi Tidke',
        'Sahas Nayar',
        'Pari More',
        'Tanmay Agarwal',
        'Ishaan Pathak',
        'Sumit Sonawane'
      ]
    },
    {
      title: 'Decor',
      names: [
        'Reetisha Gajbhiy',
        'Radhika Rajput',
        'Yashada Salunke',
        'Rutuja Shinde',
        'Rutuja Suratkar',
        'Radhika Parkhi',
        'Sanchita Mane',
        'Anuj Pawar',
        'Prathmesh Awale',
        'Vaibhav Kambne',
        'Prajwal Yadav',
        'Omkar Kekan'
      ]
    },
    {
      title: 'Design',
      names: [
        'Sai Shasankar',
        'Rushikesh Kamble',
        'Aditi Kumthewar',
        'Devyani Farsole',
        'Dhananjay Jirekar',
        'Aditi Jaiswal',
        'Payal Gaikwad'
      ]
    },
    {
      title: 'Documentation',
      names: [
        'Vedant Dabade',
        'Shravani Pasare',
        'Aniruddha Wartak',
        'Shikha Bhayani'
      ]
    },
    {
      title: 'Events and Proshows',
      names: [
        'Darshan Jadhav',
        'Soham Akolkar',
        'Parmita Bambarde',
        'Dnyaneshwari Fartade',
        'Nikhil Gavde',
        'Mehek Barapatre',
        'Krish Kolhiya',
        'Manan Sharma',
        'Hemashree Gade',
        'Ayush Rengde',
        'Aastha Bhagat',
        'Arya Ghadge',
        'Swarali Bhope',
        'Ankit Gaikwad'
      ]
    },
    {
      title: 'Finance and Sponsorships',
      names: [
        'Aman Arora',
        'Arush Kaul',
        'Aaroh Joshi',
        'Vedant Nigam',
        'Tanvi Kshirsagar',
        'Gunjan Kudmethe',
        'Atulya Anand',
        'Aryan Rasne',
        'Bhavesha Sanap',
        'Ashmit Jain',
        'Dhanvi Pethe',
        'Harshal Kokate',
        'Raghav Mehta',
        'Varad Badve',
      ]
    },
    {
      title: 'Marketing',
      names: [
        'Ronak Bhandari',
        'Nikunj Phadke',
        'Naman Kalra',
        'Nirvan Mehta',
        'Bhavik Pawar',
        'Adarsh Choudhury',
        'Tanushka Gulhane',
        'Purvansh Patel',
        'Swaraj Nayakwadi',
        'Tanmayi Barde',
        'Mohd. Mehnadi',
        'Anushka Joshi'
      ]
    },
    {
      title: 'Media',
      names: [
        'Omsai',
        'Twinkle',
        'Manas Chaudhari',
        'Shreya Kuwar',
        'Sonia Pagare'
      ]
    },
    {
      title: 'Print and Purchase',
      names: [
        'Samruddhi Bodke',
        'Om Haral',
        'Saumya Dhere',
        'Naman Tahaliya',
        'Vedant Satao',
        'Rohit Naikwadi',
        'Omkar Chaudhari',
        'Shreya Ambavale',
        'Prathamesh Chakrawar',
      ]
    },
    {
      title: 'Production',
      names: [
        'Aadarsh Maurya',
        'Tirupati Jaybhaye',
        'Sanket Khdekar',
        'Gargi Dhabe',
        'Ved Dethe',
        'Kedar Kukade',
        'Sahil Sabale',
        'Suyog Sawant',
        'Siddhant Chavan',
        'Ayush Deole',
      ]
    },
    {
      title: 'Publicity and Registrations',
      names: [
        'Adwaay Ranade',
        'Megh Lahoti',
        'Meet Shinde',
        'Harshad Deshmukh',
        'Shreyas Joshi',
        'Ved Madke',
        'Parth Kurhade',
        'Aditya Ingle',
        'Om Kolape',
        'Shravani Shinde',
        'Mayur Ganwani',
        'Chinmayi Alandkar',
        'Rishma Raj',
      ]
    },
    {
      title: 'VFX',
      names: [
        'Paras Labde',
        'Amey Bonde',
        'Suyash Joshi',
        'Manish Waste',
        'Pratham Thomre',
        'Sahil Gade',
        'Somesh Mistri',
        'Ashwin Tajane',
        'Samruddhi Badak',
        'Tanishk Gaikwad',
        'Manali Bhalgat',
        'Soham Tonape',
      ]
    },
    {
      title: 'Web',
      names: [
        'Shrutika Chavan',
        'Nikhil Sahita',
        'Shubham Garje',
        'Bramha Lambate',
        'Tanvi Phadke',
        'Tanishqa Chopade'
      ]
    }
  ]

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-2 py-4 sm:px-4 sm:py-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundColor: 'white',
        // backgroundBlendMode: 'multiply',
        backgroundAttachment: 'fixed'
      }}
    >
      <div
        className="w-full max-w-5xl relative"
        style={{
          padding: '0',
          borderRadius: '0px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          backgroundColor: '#ffffffff',
          backgroundBlendMode: 'multiply',
          backgroundImage: `url(${paperTexture})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
        }}
      >
        <div
          className="w-full h-full"
          style={getResponsiveStyles()}
        >
          <div className="flex justify-center mb-6 mt-6 sm:mt-0">
            <img src={logo} alt="Impressions Logo" className="h-20" />
          </div>

          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
              style={{
                fontFamily: 'NCL Bliss Sureal , cursive',
                transform: 'rotate(-1deg)',
                textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                color: 'black',
                maxWidth: '90%',
                margin: '10px auto',
              }}
            >
              COORDINATOR INDUCTION RESULTS 2025
            </h2>

            <img src={dividerLine} alt="Divider Line" className="max-w-[90%] sm:max-w-[400px] mt-5 mx-auto" />
          </div>

          <div className="px-2">
            {portfolios.map((portfolio, idx) => (
              <PortfolioSection
                key={idx}
                title={portfolio.title}
                names={portfolio.names}
                innerWidth={innerWidth}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoordinatorInductionResults
