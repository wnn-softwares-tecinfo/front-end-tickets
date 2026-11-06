// UserCard.tsx
import { getInitials } from "./utils"

export interface UserProps {
  id: string
  name: string
  role: string
  avatarUrl?: string
  onNameChange?: (newName: string) => void
}

export const UserCard = ({ id, name, role, avatarUrl, onNameChange }: UserProps) => {
  const initials = getInitials(name)

  return (
    <div className="user-card">
      {avatarUrl ? (
        <img className="user-avatar" src={avatarUrl} alt={name} />
      ) : (
        <div className="user-avatar user-avatar-fallback">{initials}</div>
      )}

      <div className="user-info">
        {onNameChange ? (
          <input
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            aria-label="Editar nome"
          />
        ) : (
          <h3 className="user-name">{name}</h3>
        )}
        <p className="user-role">{role}</p>
        <span className="user-id">#{id}</span>
      </div>
    </div>
  )
}