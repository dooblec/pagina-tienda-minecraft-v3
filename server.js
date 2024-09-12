// Ruta para cerrar sesión
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Error al cerrar la sesión.');
        }
        res.redirect('/'); // Redirigir a la página de inicio después de cerrar sesión
    });
});
