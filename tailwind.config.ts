import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		'2xl': {
  			max: '1400px'
  		},
  		xl: {
  			max: '1279px'
  		},
  		lg: {
  			max: '1023px'
  		},
  		'2md': {
  			max: '950px'
  		},
  		md: {
  			max: '767px'
  		},
  		sm: {
  			max: '639px'
  		}
  	},
  	fontFamily: {
  		merri: [
  			'var(--font-merri)'
  		],
  		play: [
  			'var(--font-play)'
  		],
  		pop: [
  			'var(--font-pop)'
  		],
      sans: [
        'var(--font-geist-sans)',
        'system-ui',
        'sans-serif'
      ],
      mono: [
        'var(--font-geist-mono)',
        'monospace'
      ]
  	},
  	extend: {
  		backgroundImage: {
  			'preloader-gradient': 'linear-gradient(135deg, #1d1d1d, #444);',
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E\")",
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='0' r='0.5'/%3E%3Ccircle cx='0' cy='40' r='0.5'/%3E%3Ccircle cx='40' cy='40' r='0.5'/%3E%3Ccircle cx='20' cy='20' r='0.5'/%3E%3C/g%3E%3C/svg%3E\")",
  		},
  		colors: {
        brand: "#ff914d",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'reveal-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(80%)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'reveal-down': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-80%)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'bg-position': {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'100%': {
  					backgroundPosition: '100% 50%'
  				}
  			},
  			'content-blur': {
  				'0%': {
  					filter: 'blur(0.3rem)'
  				},
  				'100%': {
  					filter: 'blur(0)'
  				}
  			},
  			'marquee-x': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-y': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			fadeInUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
        loading: {
          '0%': {
            width: '0%'
          },
          '50%': {
            width: '100%'
          },
          '100%': {
            width: '0%'
          }
        },
  			trail: {
  				'0%': {
  					'--angle': '0deg'
  				},
  				'100%': {
  					'--angle': '360deg'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'marquee-horizontal': 'marquee-x var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-y var(--duration) linear infinite',
  			'fade-in-up': 'fadeInUp 0.7s ease-in-out forwards',
  			trail: 'trail var(--duration) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'loading': 'loading 1.5s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
