import { useState, useEffect, useRef } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

// Hook pour détecter les clics extérieurs
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Composant Calendrier
function DatePickerCalendar({ 
  selectedStartDate, 
  selectedEndDate, 
  onDateSelect,
  onClose 
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoverDate, setHoverDate] = useState(null);
  
  // Générer les jours du mois
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Obtenir le premier jour du mois
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  // Générer les semaines du mois
  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const weeks = [];
    let week = [];
    
    // Jours vides avant le premier jour du mois
    for (let i = 0; i < firstDayOfMonth; i++) {
      week.push(null);
    }
    
    // Jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      week.push(date);
      
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    
    // Jours vides après le dernier jour du mois
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }
    
    return weeks;
  };
  
  // Changer de mois
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Formater la date
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };
  
  // Vérifier si une date est dans la période sélectionnée
  const isInRange = (date) => {
    if (!selectedStartDate || !selectedEndDate || !date) return false;
    return date >= selectedStartDate && date <= selectedEndDate;
  };
  
  // Vérifier si une date est la date de début ou de fin
  const isStartDate = (date) => {
    if (!selectedStartDate || !date) return false;
    return date.toDateString() === selectedStartDate.toDateString();
  };
  
  const isEndDate = (date) => {
    if (!selectedEndDate || !date) return false;
    return date.toDateString() === selectedEndDate.toDateString();
  };
  
  // Vérifier si une date est en survol (pour l'effet de range)
  const isInHoverRange = (date) => {
    if (!selectedStartDate || !hoverDate || !date) return false;
    return date > selectedStartDate && date <= hoverDate;
  };
  
  const handleDateClick = (date) => {
    if (!date) return;
    
    if (!selectedStartDate) {
      onDateSelect(date, null);
    } else if (!selectedEndDate) {
      if (date < selectedStartDate) {
        onDateSelect(date, selectedStartDate);
      } else {
        onDateSelect(selectedStartDate, date);
      }
      onClose(); // Fermer après avoir sélectionné les deux dates
    } else {
      onDateSelect(date, null);
    }
  };
  
  const handleMouseEnter = (date) => {
    if (selectedStartDate && !selectedEndDate) {
      setHoverDate(date);
    }
  };
  
  const weeks = generateCalendar();
  const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin",
                     "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  
  const dayNames = ["L", "M", "M", "J", "V", "S", "D"];
  
  return (
    <div className="absolute top-20 left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 w-[600px]">
      <div className="p-6">
        {/* En-tête avec navigation */}
        <div className="flex justify-between items-center mb-6">
          <button
            type="button"
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-lg font-semibold">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          
          <button
            type="button"
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Calendrier */}
        <div className="mb-4">
          {/* Noms des jours */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day, index) => (
              <div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>
          
          {/* Jours du mois */}
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-1">
              {week.map((date, dayIndex) => {
                if (!date) {
                  return <div key={dayIndex} className="h-10"></div>;
                }
                
                const day = date.getDate();
                const isToday = date.toDateString() === new Date().toDateString();
                const isSelected = isStartDate(date) || isEndDate(date);
                const isRange = isInRange(date) || (selectedStartDate && !selectedEndDate && isInHoverRange(date));
                const isStart = isStartDate(date);
                const isEnd = isEndDate(date);
                
                return (
                  <button
                    key={dayIndex}
                    type="button"
                    onClick={() => handleDateClick(date)}
                    onMouseEnter={() => handleMouseEnter(date)}
                    className={`
                      h-10 flex items-center justify-center text-sm font-medium rounded-lg relative
                      ${isToday ? 'border border-blue-500' : ''}
                      ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
                      ${isRange && !isStart && !isEnd ? 'bg-blue-100' : ''}
                      ${isStart ? 'rounded-r-none' : ''}
                      ${isEnd ? 'rounded-l-none' : ''}
                      ${isRange && isStart ? 'bg-gradient-to-r from-blue-500 to-blue-100' : ''}
                      ${isRange && isEnd ? 'bg-gradient-to-l from-blue-500 to-blue-100' : ''}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        
        {/* Dates sélectionnées */}
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <div className="text-sm text-gray-500">Du</div>
            <div className="font-semibold">
              {selectedStartDate ? formatDate(selectedStartDate) : 'Sélectionnez une date'}
            </div>
          </div>
          
          <div className="text-gray-400">→</div>
          
          <div>
            <div className="text-sm text-gray-500">Au</div>
            <div className="font-semibold">
              {selectedEndDate ? formatDate(selectedEndDate) : 'Sélectionnez une date'}
            </div>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

// Composant principal avec champ de saisie
export default function DatePickerInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [inputValue, setInputValue] = useState("mar. 23 déc. → mer. 24 déc.");
  
  const wrapperRef = useRef();
  
  useClickOutside(wrapperRef, () => setIsOpen(false));
  
  const handleDateSelect = (startDate, endDate) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    
    if (startDate && endDate) {
      const format = (date) => date.toLocaleDateString('fr-FR', { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short' 
      });
      setInputValue(`${format(startDate)} → ${format(endDate)}`);
    }
  };
  
  const handleClear = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
    setInputValue("Sélectionnez une période");
    setIsOpen(false);
  };
  
  return (
    <div className="relative w-full max-w-md" ref={wrapperRef}>
      {/* Champ de saisie */}
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={inputValue}
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Sélectionnez une période"
        />
        {selectedStartDate && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        )}
      </div>
      
      {/* Calendrier overlay */}
      {isOpen && (
        <DatePickerCalendar
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          onDateSelect={handleDateSelect}
          onClose={() => setIsOpen(false)}
        />
      )}
      
    </div>
  );
}