
import React from 'react';
import DraggableCard from './DraggableCard';
import { useDragDrop } from '@/hooks/useDragDrop';

interface DashboardCardGridProps {
  initialCards: {
    id: number;
    component: React.ReactNode;
  }[];
}

const DashboardCardGrid: React.FC<DashboardCardGridProps> = ({ initialCards }) => {
  const { items: cards, handleDragStart, handleDragOver, handleDrop } = useDragDrop(initialCards);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-6">
      {cards.map((card, index) => (
        <DraggableCard 
          key={card.id} 
          index={index}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {card.component}
        </DraggableCard>
      ))}
    </div>
  );
};

export default DashboardCardGrid;
