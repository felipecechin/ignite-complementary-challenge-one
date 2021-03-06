import { memo } from "react";
import { Button } from "./Button";

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Genre[]
  selectedGenreId: number
  handleClickButton: (id: number) => void
}

function SideBarComponent({ genres, selectedGenreId, handleClickButton }: SideBarProps) {
  return (
    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  )
}

export const SideBar = memo(SideBarComponent);