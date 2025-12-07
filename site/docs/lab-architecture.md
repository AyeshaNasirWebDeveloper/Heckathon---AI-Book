---
sidebar_position: 11
---

# Lab Architecture

To teach this successfully, your lab infrastructure should look like this:

| Component | Hardware                    | Function                                               |
| --------- | --------------------------- | ------------------------------------------------------ |
| Sim Rig   | PC with RTX 4080 + Ubuntu 22.04 | Runs Isaac Sim, Gazebo, Unity, and trains LLM/VLA models. |
| Edge Brain| Jetson Orin Nano            | Runs the "Inference" stack. Students deploy their code here. |
| Sensors   | RealSense Camera + Lidar    | Connected to the Jetson to feed real-world data to the AI. |
| Actuator  | Unitree Go2 or G1 (Shared)  | Receives motor commands from the Jetson.               |

If you do not have access to RTX-enabled workstations, we must restructure the course to rely entirely on cloud-based instances (like AWS RoboMaker or NVIDIA's cloud delivery for Omniverse), though this introduces significant latency and cost complexity.
