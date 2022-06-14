---
sidebar_position: 1
---

# Requirements

# Ararat

### Node.JS
:::tip

We reccomend using the most recent **LTS release of Node.JS**.

:::
Node.JS version 14 or later

### PostgreSQL Database
Ararat uses PostgreSQL to store data. Make sure to have a database ready to go. <!-- You can deploy one on **[Hye Cloud]("https://cloud.hye.gg")** -->

# Lava

### Ubuntu
Ubuntu 18.04 or higher (must be LTS release)

### Kernel Requirements
The minimum supported kernel version is 5.4.

LXD requires a kernel with support for:
- Namespaces
- Seccomp
The following optional features also require extra kernel options:
- Namespaces (user and cgroup)
- AppArmor (including Ubuntu patch for mount mediation)
- Control Groups (blkio, cpuset, devices, memory, pids and netprio)
- CRIU (exact details to be found with CRIU upstream)

As well as any other kernel feature required by the LXC version in use