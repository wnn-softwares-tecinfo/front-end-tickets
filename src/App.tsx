import { useState } from 'react'
import { AiOutlineLike } from "react-icons/ai"
import './App.css'
import './Product.css'
import { Gallery } from './Galery'
import { UserCard } from './UserCard'
import { ProductCard } from './Product'
import { products } from './data'

function App() {
  const [curtidas, setCurtidas] = useState(0)
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState("Winnícius")

  const handleClick = () => {
    setCurtidas((like) => like + 1)
  }



  console.log('renderizou')

  return (
    <>
      <section id="center">
        <div className="hero">
          <img className="avatar"
            src='https://images.unsplash.com/photo-1791896563297-cdfe64a78157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' />
        </div>
        <div>
          <h1>Winnícius Moura</h1>
          <h2>Senior Full Stack Dev</h2>

          <p> ❤ {curtidas > 4 ? curtidas : null } likes </p>
        </div>
        <UserCard id={`${curtidas}`} name="User State" role="Backend Engineer"
          avatarUrl={`https://i.pravatar.cc/100?img=${curtidas}`}
        />
        <button
          type="button"
          className="counter"
          onClick={handleClick}
        >
          <AiOutlineLike style={{
            marginRight: 8
          }} /> Curtir

        </button>
      </section>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            avatarUrl={product.avatarUrl}
            price={product.price}
          />
        ))}
      </div>

      <section id="spacer"></section>

      <section id='gallery'>
        {email}
        <Gallery handleText={setEmail} />

        <UserCard
          id={`${curtidas}`}
          name={userName}
          role="Backend Engineer"
          avatarUrl={`https://i.pravatar.cc/100?img=${curtidas}`}
          onNameChange={(newName) => {
            console.log("Nome alterado no filho:", newName)
            setUserName(newName)
          }}
        />


        <UserCard
          id="42"
          name="Ana Souza"
          role="Product Designer"
          avatarUrl="https://i.pravatar.cc/100?img=42"
        />

      </section>

      <div
        style={{
          display: 'grid',
          gap: '1rem',
          padding: '2rem'
        }}>

        <UserCard
          id="42"
          name="Ana Souza"
          role="Product Designer"
          avatarUrl="https://i.pravatar.cc/100?img=42"
        />

        <UserCard id="7" name="João Silva" role="Backend Engineer" />

        <UserCard
          id="103"
          name="Maria Oliveira"
          role="Frontend Developer"
          avatarUrl="https://i.pravatar.cc/100?img=47"
        />

      </div>
    </>
  )
}

export default App
