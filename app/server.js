import app from './app';

const port = process.env.PORT || 3010;
app.listen(port, () => {
    console.info(`Application server started at http://localhost:${port}`);
});
