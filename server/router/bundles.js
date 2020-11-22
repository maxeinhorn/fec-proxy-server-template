const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, service2, service3,
} = require('../config/services.js');

const router = Router();

router.use('/service1.js', createProxyMiddleware({
  target: service1.url,
  pathRewrite: {
    '^/bundles/service1.js': service1.bundle,
  },
  changeOrigin: true,
}));

router.use('/style.css-Service1', createProxyMiddleware({
  target: service1.url,
  pathRewrite: {
    '^/bundles/style.css-service1': service1.style,
  },
  changeOrigin: true,
}));

router.use('/service2.js', createProxyMiddleware({
  target: service2.url,
  pathRewrite: {
    '^/bundles/service2.js': service2.bundle,
  },
  changeOrigin: true,
}));

router.use('/style.css-Service2', createProxyMiddleware({
  target: service2.url,
  pathRewrite: {
    '^/bundles/style.css-service2': service2.style,
  },
  changeOrigin: true,
}));

router.use('/service3.js', createProxyMiddleware({
  target: service3.url,
  pathRewrite: {
    '^/bundles/service3.js': service3.bundle,
  },
  changeOrigin: true,
}));

router.use('/style.css-Service3', createProxyMiddleware({
  target: service3.url,
  pathRewrite: {
    '^/bundles/style.css-service3': service3.style,
  },
  changeOrigin: true,
}));

module.exports = router;
