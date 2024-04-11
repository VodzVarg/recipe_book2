import React from 'react';

function AdminPage() {
  // Случайная информация об администраторе
  const adminInfo = {
    name: 'Иван Иванов',
    email: 'admin@example.com',
    role: 'Администратор',
    department: 'IT',
    phone: '+1234567890',
  };

  return (
    <div className="content">
      <h1>Администраторская панель</h1>
      <div>
        <p><strong>Имя:</strong> {adminInfo.name}</p>
        <p><strong>Email:</strong> {adminInfo.email}</p>
        <p><strong>Роль:</strong> {adminInfo.role}</p>
        <p><strong>Отдел:</strong> {adminInfo.department}</p>
        <p><strong>Телефон:</strong> {adminInfo.phone}</p>
      </div>
    </div>
  );
}

export default AdminPage;