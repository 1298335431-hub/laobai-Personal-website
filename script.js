// 页脚年份
document.getElementById("year").textContent = new Date().getFullYear();

// 移动端菜单开关
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// 点击导航链接后自动收起菜单
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// 滚动时高亮当前导航项
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navAnchors.forEach((anchor) => {
    anchor.classList.remove("active");
    if (anchor.getAttribute("href") === "#" + current) {
      anchor.classList.add("active");
    }
  });
});

// 技能条：进入视口后填充动画
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target._target;
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".skill-fill").forEach((fill) => {
  fill._target = fill.style.width;
  fill.style.width = "0";
  skillObserver.observe(fill);
});

// 联系表单提交（示例）
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("消息已提交（示例）！");
  e.target.reset();
});
