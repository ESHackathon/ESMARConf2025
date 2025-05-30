document.addEventListener('DOMContentLoaded', () => {
  const parseAndConvertTime = (element) => {
    const timeText = element.textContent.trim();
    const match = timeText.match(/(\d{1,2}):(\d{2})/);

    if (match) {
      const hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);

      // Assume the time is in UTC+1
      const now = new Date();
      const assumedUTCPlus1 = new Date(Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours - 1, // shift from UTC+1 to UTC
        minutes
      ));

      const localTime = assumedUTCPlus1.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });

      // Replace time portion only
      element.textContent = element.textContent.replace(/(\d{1,2}):(\d{2})/, localTime);
    }
  };

  // 1. .col-title elements inside #day-content
  const dayContent = document.getElementById('day-content');
  if (dayContent) {
    const colTitleElements = dayContent.querySelectorAll('.col-title');
    colTitleElements.forEach(parseAndConvertTime);
  }

  // 2. Anywhere: elements with class 'badge'
  const badges = document.querySelectorAll('.badge');
  if (badges) {
    badges.forEach(parseAndConvertTime);
  }
});
