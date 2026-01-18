import { useState, useEffect } from 'react'
import './App.css'

const albums = [
  { id: 1, title: 'Midnight Drive', artist: 'Neon Dreams', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 2, title: 'Ocean Waves', artist: 'Coastal', color: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)' },
  { id: 3, title: 'Golden Hour', artist: 'Sunset Collective', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { id: 4, title: 'Electric Soul', artist: 'Voltage', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { id: 5, title: 'Forest Echo', artist: 'Nature Sounds', color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { id: 6, title: 'City Lights', artist: 'Urban Beat', color: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)' },
  { id: 7, title: 'Stargazer', artist: 'Cosmos', color: 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)' },
  { id: 8, title: 'Velvet Night', artist: 'Luna Rose', color: 'linear-gradient(135deg, #232526 0%, #414345 100%)' },
  { id: 9, title: 'Summer Haze', artist: 'Beach Boys Club', color: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)' },
  { id: 10, title: 'Arctic Dreams', artist: 'Frost', color: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)' },
  { id: 11, title: 'Crimson Sky', artist: 'Red Velvet', color: 'linear-gradient(135deg, #cb2d3e 0%, #ef473a 100%)' },
  { id: 12, title: 'Neon Jungle', artist: 'Synthwave', color: 'linear-gradient(135deg, #00f260 0%, #0575e6 100%)' },
  { id: 13, title: 'Purple Rain', artist: 'Violet Storm', color: 'linear-gradient(135deg, #7f00ff 0%, #e100ff 100%)' },
  { id: 14, title: 'Desert Wind', artist: 'Sahara', color: 'linear-gradient(135deg, #c2703a 0%, #e6a857 100%)' },
  { id: 15, title: 'Moonlight Sonata', artist: 'Classical Edge', color: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)' },
  { id: 16, title: 'Cherry Blossom', artist: 'Tokyo Dreams', color: 'linear-gradient(135deg, #ffb7c5 0%, #ff69b4 100%)' },
  { id: 17, title: 'Thunder Road', artist: 'Highway Kings', color: 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)' },
  { id: 18, title: 'Coral Reef', artist: 'Deep Blue', color: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)' },
  { id: 19, title: 'Northern Lights', artist: 'Aurora', color: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)' },
  { id: 20, title: 'Vintage Soul', artist: 'Retro Vibes', color: 'linear-gradient(135deg, #834d9b 0%, #d04ed6 100%)' },
  { id: 21, title: 'Emerald City', artist: 'Green Machine', color: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)' },
  { id: 22, title: 'Sunset Boulevard', artist: 'Hollywood', color: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)' },
  { id: 23, title: 'Blue Monday', artist: 'New Order', color: 'linear-gradient(135deg, #2196f3 0%, #3f51b5 100%)' },
  { id: 24, title: 'Firefly', artist: 'Night Garden', color: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)' },
  { id: 25, title: 'Silver Lining', artist: 'Cloud Nine', color: 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)' },
  { id: 26, title: 'Tropical Storm', artist: 'Island Beats', color: 'linear-gradient(135deg, #1cd8d2 0%, #93edc7 100%)' },
  { id: 27, title: 'Rustic Heart', artist: 'Country Roads', color: 'linear-gradient(135deg, #8e6433 0%, #daa520 100%)' },
  { id: 28, title: 'Phantom', artist: 'Ghost Protocol', color: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)' },
  { id: 29, title: 'Candy Shop', artist: 'Sweet Tooth', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
  { id: 30, title: 'Steel City', artist: 'Industrial', color: 'linear-gradient(135deg, #485563 0%, #29323c 100%)' },
  { id: 31, title: 'Lavender Fields', artist: 'Provence', color: 'linear-gradient(135deg, #9796f0 0%, #fbc7d4 100%)' },
  { id: 32, title: 'Wildfire', artist: 'Blaze', color: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)' },
  { id: 33, title: 'Deep Space', artist: 'Nebula', color: 'linear-gradient(135deg, #000428 0%, #004e92 100%)' },
  { id: 34, title: 'Mango Tango', artist: 'Fruit Punch', color: 'linear-gradient(135deg, #ff8008 0%, #ffc837 100%)' },
  { id: 35, title: 'Misty Morning', artist: 'Dawn Chorus', color: 'linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)' },
  { id: 36, title: 'Electric Blue', artist: 'Shock Wave', color: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)' },
  { id: 37, title: 'Rose Gold', artist: 'Luxury', color: 'linear-gradient(135deg, #b76e79 0%, #e8b4b8 100%)' },
  { id: 38, title: 'Bamboo Forest', artist: 'Zen Garden', color: 'linear-gradient(135deg, #3a6024 0%, #7cb342 100%)' },
  { id: 39, title: 'Midnight Blue', artist: 'Jazz Club', color: 'linear-gradient(135deg, #1a2a6c 0%, #b21f1f 100%)' },
  { id: 40, title: 'Peach Sunset', artist: 'Warm Embrace', color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  { id: 41, title: 'Cyber Punk', artist: 'Digital Age', color: 'linear-gradient(135deg, #fc00ff 0%, #00dbde 100%)' },
  { id: 42, title: 'Autumn Leaves', artist: 'Fall Season', color: 'linear-gradient(135deg, #d38312 0%, #a83279 100%)' },
  { id: 43, title: 'Ice Palace', artist: 'Frozen', color: 'linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%)' },
  { id: 44, title: 'Volcano', artist: 'Magma', color: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)' },
  { id: 45, title: 'Twilight Zone', artist: 'Mystery', color: 'linear-gradient(135deg, #544a7d 0%, #ffd452 100%)' },
  { id: 46, title: 'Cotton Candy', artist: 'Carnival', color: 'linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)' },
  { id: 47, title: 'Storm Chaser', artist: 'Thunder', color: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)' },
  { id: 48, title: 'Lime Light', artist: 'Citrus', color: 'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)' },
  { id: 49, title: 'Royal Purple', artist: 'Majesty', color: 'linear-gradient(135deg, #6a3093 0%, #a044ff 100%)' },
  { id: 50, title: 'Solar Flare', artist: 'Sun Spot', color: 'linear-gradient(135deg, #f83600 0%, #f9d423 100%)' },
].sort((a, b) => a.title.localeCompare(b.title))

function App() {
  const [activeIndex, setActiveIndex] = useState(3)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : albums.length - 1))
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev < albums.length - 1 ? prev + 1 : 0))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const getTransformStyle = (index) => {
    const diff = index - activeIndex
    const absD = Math.abs(diff)

    if (diff === 0) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        zIndex: 10,
        opacity: 1,
      }
    }

    const direction = diff > 0 ? 1 : -1
    const translateX = direction * (120 + absD * 80)
    const rotateY = -direction * 45
    const scale = Math.max(0.6, 1 - absD * 0.15)
    const opacity = Math.max(0.3, 1 - absD * 0.25)

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex: 10 - absD,
      opacity,
    }
  }

  return (
    <div className="app">
      <h1>iPod Carousel</h1>

      <div className="carousel-container">
        <div className="carousel">
          {albums.map((album, index) => (
            <div
              key={album.id}
              className={`album-card ${index === activeIndex ? 'active' : ''}`}
              style={getTransformStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className="album-cover" style={{ background: album.color }}>
                <div className="album-art-text">
                  <span className="music-icon">&#9835;</span>
                </div>
              </div>
              <div className="album-reflection" style={{ background: album.color }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="album-info">
        <h2>{albums[activeIndex].title}</h2>
        <p>{albums[activeIndex].artist}</p>
      </div>

      <div className="controls">
        <button onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : albums.length - 1))}>
          &#9664; Prev
        </button>
        <button onClick={() => setActiveIndex((prev) => (prev < albums.length - 1 ? prev + 1 : 0))}>
          Next &#9654;
        </button>
      </div>

      <p className="hint">Use arrow keys or buttons to navigate</p>
    </div>
  )
}

export default App
