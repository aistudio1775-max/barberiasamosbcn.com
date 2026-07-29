export interface ShopStatus {
  isOpen: boolean;
  isClosingSoon: boolean;
  isOpeningSoon: boolean;
  badgeText: string;
  detailText: string;
  badgeColor: 'green' | 'amber' | 'red';
}

export function getShopStatus(date: Date = new Date()): ShopStatus {
  const day = date.getDay(); // 0 = Sunday
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTotalMinutes = hours * 60 + minutes;

  const openMinutes = 9 * 60 + 30; // 570 (09:30)
  const closeMinutes = 21 * 60; // 1260 (21:00)
  const tenMinBeforeOpen = openMinutes - 10; // 560 (09:20)
  const tenMinBeforeClose = closeMinutes - 10; // 1250 (20:50)

  // Sunday: Closed
  if (day === 0) {
    return {
      isOpen: false,
      isClosingSoon: false,
      isOpeningSoon: false,
      badgeText: 'Cerrado',
      detailText: 'Abre el lunes a las 09:30',
      badgeColor: 'red',
    };
  }

  // 10 minutes before opening (09:20 - 09:29)
  if (currentTotalMinutes >= tenMinBeforeOpen && currentTotalMinutes < openMinutes) {
    const minLeft = openMinutes - currentTotalMinutes;
    return {
      isOpen: false,
      isClosingSoon: false,
      isOpeningSoon: true,
      badgeText: `Abre pronto (${minLeft} min)`,
      detailText: `Apertura a las 09:30 h`,
      badgeColor: 'amber',
    };
  }

  // Open & 10 minutes before closing (20:50 - 20:59)
  if (currentTotalMinutes >= tenMinBeforeClose && currentTotalMinutes < closeMinutes) {
    const minLeft = closeMinutes - currentTotalMinutes;
    return {
      isOpen: true,
      isClosingSoon: true,
      isOpeningSoon: false,
      badgeText: `Cierra pronto (Faltan ${minLeft} min)`,
      detailText: `Cierre a las 21:00 h`,
      badgeColor: 'amber',
    };
  }

  // Open standard hours (09:30 - 20:49)
  if (currentTotalMinutes >= openMinutes && currentTotalMinutes < tenMinBeforeClose) {
    return {
      isOpen: true,
      isClosingSoon: false,
      isOpeningSoon: false,
      badgeText: 'Abierto ahora',
      detailText: 'Horario: 09:30 – 21:00 h',
      badgeColor: 'green',
    };
  }

  // Closed outside hours:
  // Case A: Before opening time today (00:00 - 09:19)
  if (currentTotalMinutes < tenMinBeforeOpen) {
    return {
      isOpen: false,
      isClosingSoon: false,
      isOpeningSoon: false,
      badgeText: 'Cerrado ahora',
      detailText: 'Abre hoy a las 09:30',
      badgeColor: 'red',
    };
  }

  // Case B: After closing time today (>= 21:00)
  const nextOpenMsg = day === 6 ? 'Abre el lunes a las 09:30' : 'Abre mañana a las 09:30';
  return {
    isOpen: false,
    isClosingSoon: false,
    isOpeningSoon: false,
    badgeText: 'Cerrado ahora',
    detailText: nextOpenMsg,
    badgeColor: 'red',
  };
}
