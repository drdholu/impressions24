import { useState, useEffect } from 'react'
import bg from '../images/bg-15.png'
import overlay from '../images/bg-17.jpg';
import logo from '../images/impressions text logo.png'
import dividerLine from '../images/divider-3.png'

const MMIResults = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    window.addEventListener('resize', () => {
        setInnerWidth(window.innerWidth)
    })

    useEffect(() => {
        document.title = "Mr. and Ms. Impressions Results 2025 | COEP Impressions"
    }, []);

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
            backgroundImage: `url(${overlay})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'top left'
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

    const names = [
        "JAHNAVI SHRIRAM SINGH",
        "VIKHYATH PATIL",
        "ANIRUDH CHANDRA",
        "YASH SAGAR VARMA",
        "SANCHIT JOSHI",
        "ANUPREETA NIMBALKAR",
        "SHIRLEY DAULATKAR",
        "VED BHATTAD",
        "SAVARI SATAV",
        "GARGI RATHOD",
        "VEDANT NANGARE",
        "ARYA KURKUTE",
        "SHREYAS SATISHKUMAR SAVADE",
        "ZIL SHARAD BHUTE",
        "PAYAL JADHAV",
        "SUPRIYA KUMARI",
        "ATHARVA SANTOSH BHUJBAL",
        "SHLOK SALVE",
        "RIYA LONDHE",
        "RISHI GUJARATHI",
        "PREET SHERKHANE",
        "JANVI DHOLE",
        "AARYA NIMKAR",
        "ANJALI PHAD",
        "ADITI POTEKAR",
        "RAHUL MESHRAM",
        "APARNA ACHATH",
        "SHUBHRA JITENDRA AHIRRAO",
        "TANAY PRASHANT BHARAMBE",
        "TANVI MANE",
        "ESHITA PATIL",
        "PRIYANKA SHAHARE",
        "ANEKA RGANYARPAWAR",
        "ATHARVA SHARMA",
        "RIDDHI LOHIYA",
    ];

    return (
        <div
            className="min-h-screen w-full flex items-center justify-center px-2 py-4 sm:px-4 sm:py-8"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'white',
                backgroundBlendMode: 'multiply',
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
                    backgroundImage: `url(${overlay})`,
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
                            className="text-2xl sm:text-2xl md:text-4xl mb-2"
                            style={{
                                fontFamily: "'Rockia Regular', sans-serif",
                                fontWeight: 600,
                                color: 'black',
                                maxWidth: '90%',
                                margin: '10px auto',
                                textShadow: 'none',
                                transform: 'none',
                                letterSpacing: '1px',
                            }}
                        >
                            <span className="block sm:inline">
                                MR. & MS. IMPRESSIONS 2025
                            </span>
                            <br />
                            <span className="block sm:inline">
                                ROUND 1 RESULTS
                            </span>
                        </h2>

                        <img src={dividerLine} alt="Divider Line" className="max-w-[90%] sm:max-w-[400px] mt-5 mx-auto" />
                    </div>
                    <div className="px-2">
                        <div className="text-center mb-6"
                            style={{ fontFamily: "'Chocogoose Classic Regular', serif", fontWeight: "bolder" }}
                        >
                            {names.map((name, idx) => (
                                <p
                                    className="text-lg mb-4"
                                    key={idx}
                                    style={{
                                        fontWeight: 500,
                                        letterSpacing: '1px',
                                    }}
                                >
                                    {name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MMIResults