import { resolve } from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackConfig, { output } from './webpack.config.ts';

app = express(),

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});

app.get('/', (_req, res) => {
  res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});

let compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true,
   publicPath: output.publicPath,
   stats: { colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(resolve(__dirname, 'dist')));