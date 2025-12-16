# 🛒 Panel de Administración – ElectroComponentes

## 📌 Descripción
**ElectroComponentes** es una aplicación web desarrollada con **Node.js, Express y MySQL**, que implementa un **panel de administración** para la gestión de productos y usuarios.

Permite **crear, consultar, modificar y eliminar productos**, cuenta con **login con sesiones**, vistas dinámicas con **EJS** y conexión a base de datos mediante **MySQL**.

El proyecto está diseñado como **backend + panel admin**, dejando el **frontend de la tienda como un módulo independiente**.

---

## ⚙️ Características Principales

### 📦 Gestión de Productos (CRUD)
- **Crear** productos  
- **Listar** productos (todos o por ID)  
- **Modificar** productos existentes  
- **Eliminar** productos por ID  

### 🔐 Sistema de Autenticación
- **Login** de usuarios  
- Manejo de **sesiones** con \`express-session\`  
- **Protección de rutas** mediante middleware (\`requireLogin\`)  
- **Logout** y cierre de sesión  

### 🎨 Vistas Dinámicas
- Motor de plantillas **EJS**  
- Uso de **partials reutilizables** (\`head\`, \`nav\`, \`footer\`)  
- Panel de administración integrado al backend  

### 🗄️ Base de Datos
- Conexión a **MySQL** mediante \`mysql2\`  
- Persistencia de **productos y usuarios**  
- Consultas **SQL parametrizadas**  

### 🏗️ Arquitectura
- Separación por capas:
  - **Rutas**
  - **Controladores**
  - **Modelos**
  - **Middlewares**
- Uso de **variables de entorno** con \`dotenv\`

---

## 🛠️ Tecnologías Utilizadas
- **Node.js**
- **Express**
- **MySQL**
- **EJS**
- **Express-session**
- **dotenv**
- **cors**

---

## 💻 Instalación

### ✅ Requisitos Previos
- **Node.js** (v18 o superior recomendado)
- **MySQL**

### ▶️ Pasos de Instalación
1. Clonar el repositorio:
```bash
git clone https://github.com/usuario/electrocomponentes.git
cd electrocomponentes
Inicializar el proyecto:
```

### ▶️ Pasos de Instalación
```bash
npm init -y
Instalar dependencias principales:
```

```bash
npm install express mysql2 ejs cors dotenv express-session
Instalar dependencias de desarrollo:
```

```bash
npm install --save-dev nodemon
```
🔐 Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto:

.env:
PORT=3000
DB_HOST=localhost
DB_NAME=nombre_base_de_datos
DB_USER=root
DB_PASSWORD=
SESSION_SECRET=clave_secreta_segura

▶️ Ejecutar el Proyecto
Desarrollo
```bash
npm run dev
```

🔍 Funcionamiento del Proyecto
🚀 Inicio del Servidor
Carga de variables de entorno

Configuración de middlewares globales

Servido de archivos estáticos

Configuración de EJS como motor de vistas

🔑 Sistema de Login
Acceso a /login

Envío de credenciales por formulario

Validación contra la base de datos

Creación de sesión y redirección al dashboard

🚧 Estado del Proyecto
✅ CRUD de productos

✅ Login y sesiones

✅ Vistas EJS integradas

✅ Arquitectura modular

🔜 Pendiente
Encriptación de contraseñas (bcrypt)

Mejoras visuales

Exportación de datos (Excel / tickets)

👨‍💻 Autor
Jose Chavarri
Tecnicatura en Programación – UTN
