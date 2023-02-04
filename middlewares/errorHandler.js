const errorHandler = async (err, req, res, next) => {
    let message = err.message || 'Ooops! Something went wrong.';

    if (process.env.NODE_ENV == 'production') {
        message = 'Ooops! Something went wrong.';
        return res.status(500).json({ message });
    }

    res.status(500).json({ message, error: err });
}

export default errorHandler;