export type BadgeType = 'popular' | 'new' | 'chef'

export interface FeaturedDish {
  id: string
  menuId: string
  badge: BadgeType
  image: string
}

export const featuredDishes: FeaturedDish[] = [
  { id: 'f1', menuId: 'r1', badge: 'chef', image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800' },
  { id: 'f2', menuId: 'd1', badge: 'popular', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800' },
  { id: 'f3', menuId: 'n1', badge: 'new', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800' },
  { id: 'f4', menuId: 'ri1', badge: 'popular', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800' },
]
