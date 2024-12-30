module.exports = {
  apps: [
    {
      name: "ENMEDIA1",
      cwd: "/home/ubuntu/enmedia",
      script: "./.output/server/index.mjs",
      exec_mode: "cluster",
      instances: 2,
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
    {
      name: "ENMEDIA2",
      cwd: "/home/ubuntu/enmedia2",
      script: "./.output/server/index.mjs",
      exec_mode: "cluster",
      instances: 2,
      watch: true,
      env: {
        PORT: 3001,
        NODE_ENV: "production",
      },
    },
    {
      name: "ENMEDIA3",
      cwd: "/home/ubuntu/enmedia3",
      script: "./.output/server/index.mjs",
      exec_mode: "cluster",
      instances: 2,
      watch: true,
      env: {
        PORT: 3002,
        NODE_ENV: "production",
      },
    },
  ],
};
