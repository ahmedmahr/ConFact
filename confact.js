// 1. التبديل بين أدوار المؤسسة وتحديث النص التوضيحي
const roleButtons = document.querySelectorAll('.role-btn');
const roleDescription = document.getElementById('roleDescription');

const descriptions = {
  manufacturer: 'Source verified local raw materials within 10 km & cut freight costs.',
  supplier: 'Connect directly with verified local factories & streamline bulk B2B orders.'
};

roleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // إزالة التفعيل من الزر السابق وتفعيله للزر الحالي
    roleButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // تحديث النص داخل الصندوق
    const selectedRole = btn.getAttribute('data-role');
    roleDescription.textContent = descriptions[selectedRole];
  });
});

// 2. إظهار وإخفاء كلمة المرور
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.getAttribute('type') === 'password';
  passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
  togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.toggle('fa-eye-slash');
});

// 3. استقبال البيانات عند إرسال النموذج
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const activeRole = document.querySelector('.role-btn.active').getAttribute('data-role');
  const taxId = document.getElementById('taxId').value;
  
  console.log({ role: activeRole, taxId });
  alert(`Logging in as ${activeRole}...`);
});