// ===== КАЛЬКУЛЯТОР СТОИМОСТИ =====
const calcType = document.getElementById("calcType");
const calcRooms = document.getElementById("calcRooms");
const calcBath = document.getElementById("calcBath");
const calcWindows = document.getElementById("calcWindows");
const calcWindowsCount = document.getElementById("calcWindowsCount");
const calcPrice = document.getElementById("calcPrice");

function calculatePrice() {
  // Базовая цена по типу уборки
  const basePrice = parseInt(calcType.value);

  // Надбавка за комнаты (кроме первой)
  const roomsExtra = (parseInt(calcRooms.value) - 1) * 800;

  // Надбавка за второй санузел
  const bathExtra = (parseInt(calcBath.value) - 1) * 700;

  // Окна
  let windowsExtra = 0;
  if (calcWindows.checked) {
    windowsExtra = parseInt(calcWindowsCount.value) * 500;
  }

  const total = basePrice + roomsExtra + bathExtra + windowsExtra;
  calcPrice.textContent = total;
}

// Считаем при изменении любого поля
calcType.addEventListener("change", calculatePrice);
calcRooms.addEventListener("change", calculatePrice);
calcBath.addEventListener("change", calculatePrice);
calcWindows.addEventListener("change", calculatePrice);
calcWindowsCount.addEventListener("change", calculatePrice);

// Первый расчёт при загрузке
calculatePrice();


// ===== ПЛАВНОЕ ПОЯВЛЕНИЕ =====
const revealElements = document.querySelectorAll(
  ".feature, .service-card, .how__step, .review"
);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(function (el) {
  el.classList.add("reveal");
  observer.observe(el);
});
