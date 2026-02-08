const wpNumber = "+918008859934";
function makeCall() {
  window.location.href = "tel:+919989719934";
}
const callNumber = "9989719934";

const services = [
  {
    id: 1,
    title: "Monthly Basic Driver",
    desc:
      "Professional drivers in uniform for your daily commute and family safety.",
    img:"https://alqamarlajpal.com/wp-content/uploads/2023/04/driver-opening-car-door-for-young-businesswoman-1024x682-2.jpg"
  },
  {
    id: 2,
    title: "Hourly/Daily Driver",
    desc:
      "Experienced drivers for short trips or full-day outstation requirements.",
    img:"https://img.freepik.com/free-photo/elegant-uber-driver-giving-taxi-ride_23-2149241795.jpg"
  },
  {
    id: 3,
    title: "Housekeeping Services",
    desc: "Professional home cleaning and maintenance services by experts.",
    img:
      "https://img.freepik.com/free-photo/medium-shot-woman-cleaning-home_23-2150453309.jpg"
  },
  {
    id: 4,
    title: "Watchman",
    desc: "Natural security personnel and watchmen for residential properties.",
    img:
      "https://img.freepik.com/free-photo/portrait-male-security-guard-with-uniform_23-2150368771.jpg"
  },
  {
    id: 5,
    title: "Office Boy Services",
    desc:
      "Dedicated office assistants for hospitality and administrative support.",
    img:
      "https://image2url.com/r2/default/images/1770545819741-decbee42-49d7-4da5-b8c3-dbddafc1a6c5.jpeg"
  },
  {
    id: 6,
    title: "Professional Cooking",
    desc: "Experienced lady cooks providing hygienic and tasty home meals.",
    img:
      "https://img.freepik.com/free-photo/portrait-female-chef-with-cooking-pot-table-with-fresh-vegetables_613910-9837.jpg"
  },
  {
    id: 7,
    title: "Baby & Elder Care",
    desc:
      "Compassionate caregivers for child care and elderly assistance at home.",
    img:
      "https://img.freepik.com/free-photo/happy-nurse-take-care-elderly-man-wheelchair-garden-nursing-home_554837-117.jpg"
  },
  {
    id: 8,
    title: "Security Guard Services",
    desc:
      "Well-trained and disciplined security personnel for 24/7 protection.",
    img:
      "https://img.freepik.com/free-photo/portrait-male-security-guard-with-uniform_23-2150368771.jpg"
  },
  {
    id: 9,
    title: "Real Estate Property Deals",
    desc: "Expert mediation for buying and selling plots, houses, and flats.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500"
  }
];

const grid = document.getElementById("services");
services.forEach((s) => {
  grid.innerHTML += `
        <div class="service-card">
            <div class="image-banner" style="background-image: url('${s.img}')">
                <div class="image-overlay">${s.title}</div>
            </div>
            <div class="content">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
            </div>
            <div class="btn-group">
                <a href="tel:${callNumber}" class="btn call"><i class="fas fa-phone"></i> Call Now</a>
                <a href="https://wa.me/${wpNumber}?text=Inquiry for ${s.title}" target="_blank" class="btn whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                <a href="https://wa.me/${wpNumber}?text=BOOKING: ${s.title}" class="btn book">Book Service</a>
            </div>
        </div>`;
});