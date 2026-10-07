module.exports = {
  apps: [{
    name: "xamzayevich-uz",
    script: "node_modules/next/dist/bin/next",
    args: "start -p 3000",
    cwd: __dirname,
    instances: 1,
    exec_mode: "fork",
    max_memory_restart: "400M",
    env: { NODE_ENV: "production" },
  }],
};
