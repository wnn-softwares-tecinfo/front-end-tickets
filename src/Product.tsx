import { getInitials } from "./utils"

export interface ProductProps {
  id: string
  name: string
  description: string
  price: number
  avatarUrl?: string
}

export const ProductCard = ({ id, name, description, price, avatarUrl }: ProductProps) => {
  const initials = getInitials(name)

  return (
    <div className="product-card">
      {avatarUrl ? (
        <img className="product-avatar" src={avatarUrl} alt={name} />
      ) : (
        <div className="product-avatar product-avatar-fallback">{initials}</div>
      )}

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <span className="product-price">R$ {price.toFixed(2)}</span>
          <button
            type="button"
            className="product-buy"
            aria-label={`Adicionar ${name} ao carrinho`}
          >
            Comprar
          </button>
        </div>
        <span className="product-id">#{id}</span>
      </div>
    </div>
  )
}