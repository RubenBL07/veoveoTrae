# Veo Veo Vision Game

Un juego interactivo de "Veo Veo" con inteligencia artificial que utiliza visión por computadora para identificar objetos en imágenes.

## Características

- 🎮 Juego multijugador en tiempo real
- 🤖 IA integrada para reconocimiento de objetos
- 👥 Sistema de salas y usuarios
- 🔐 Autenticación segura con Better Auth
- 📱 Interfaz responsive y moderna
- 🎯 Sistema de puntuación

## Tecnologías

- **Frontend**: React + TypeScript + Vite
- **Backend**: Supabase
- **Autenticación**: Better Auth
- **IA**: OpenAI Vision API
- **Estilos**: Tailwind CSS
- **Base de datos**: PostgreSQL (Supabase)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/RubenBL07/veoveoTrae.git
cd veoveoTrae
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Completa las variables de entorno en `.env`:
- Configuración de Supabase
- API Key de OpenAI
- Configuración de Better Auth

5. Ejecuta el proyecto:
```bash
npm run dev
```

## Despliegue

Este proyecto está configurado para desplegarse en Render. Asegúrate de configurar las variables de entorno en tu plataforma de despliegue.

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
