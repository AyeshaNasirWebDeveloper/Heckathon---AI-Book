import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './modules.module.css';

export default function Modules() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Modules"
      description="Explore the modules for Physical AI & Humanoid Robotics">
      <header className={styles.moduleHeader}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Physical AI & Humanoid Robotics
          </Heading>
          <p className="hero__subtitle">
            Focus and Theme: AI Systems in the Physical World. Embodied Intelligence.
          </p>
          <p className="hero__subtitle">
            Goal: Bridging the gap between the digital brain and the physical body. Students apply their AI knowledge to control Humanoid Robots in simulated and real-world environments.
          </p>
        </div>
      </header>
      <main className={styles.moduleMain}>
        <div className="container">
          <section>
            <Heading as="h2">Quarter Overview</Heading>
            <p>
              The future of AI extends beyond digital spaces into the physical world. This capstone quarter introduces Physical AI—AI systems that function in reality and comprehend physical laws. Students learn to design, simulate, and deploy humanoid robots capable of natural human interactions using ROS 2, Gazebo, and NVIDIA Isaac.
            </p>
          </section>

          <section>
            <Heading as="h2">Module 1: The Robotic Nervous System (ROS 2)</Heading>
            <ul>
              <li>Focus: Middleware for robot control.</li>
              <li>ROS 2 Nodes, Topics, and Services.</li>
              <li>Bridging Python Agents to ROS controllers using rclpy.</li>
              <li>Understanding URDF (Unified Robot Description Format) for humanoids.</li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Module 2: The Digital Twin (Gazebo & Unity)</Heading>
            <ul>
              <li>Focus: Physics simulation and environment building.</li>
              <li>Simulating physics, gravity, and collisions in Gazebo.</li>
              <li>High-fidelity rendering and human-robot interaction in Unity.</li>
              <li>Simulating sensors: LiDAR, Depth Cameras, and IMUs.</li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Module 3: The AI-Robot Brain (NVIDIA Isaac™)</Heading>
            <ul>
              <li>Focus: Advanced perception and training.</li>
              <li>NVIDIA Isaac Sim: Photorealistic simulation and synthetic data generation.</li>
              <li>Isaac ROS: Hardware-accelerated VSLAM (Visual SLAM) and navigation.</li>
              <li>Nav2: Path planning for bipedal humanoid movement.</li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Module 4: Vision-Language-Action (VLA)</Heading>
            <ul>
              <li>Focus: The convergence of LLMs and Robotics.</li>
              <li>Voice-to-Action: Using OpenAI Whisper for voice commands.</li>
              <li>Cognitive Planning: Using LLMs to translate natural language ("Clean the room") into a sequence of ROS 2 actions.</li>
              <li>Capstone Project: The Autonomous Humanoid. A final project where a simulated robot receives a voice command, plans a path, navigates obstacles, identifies an object using computer vision, and manipulates it.</li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Why Physical AI Matters</Heading>
            <p>
              Humanoid robots are poised to excel in our human-centered world because they share our physical form and can be trained with abundant data from interacting in human environments. This represents a significant transition from AI models confined to digital environments to embodied intelligence that operates in physical space.
            </p>
          </section>

          <section>
            <Heading as="h2">Learning Outcomes</Heading>
            <ul>
              <li>Understand Physical AI principles and embodied intelligence</li>
              <li>Master ROS 2 (Robot Operating System) for robotic control</li>
              <li>Simulate robots with Gazebo and Unity</li>
              <li>Develop with NVIDIA Isaac AI robot platform</li>
              <li>Design humanoid robots for natural interactions</li>
              <li>Integrate GPT models for conversational robotics</li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Weekly Breakdown</Heading>
            <h3>Weeks 1-2: Introduction to Physical AI</h3>
            <ul>
              <li>Foundations of Physical AI and embodied intelligence</li>
              <li>From digital AI to robots that understand physical laws</li>
              <li>Overview of humanoid robotics landscape</li>
              <li>Sensor systems: LIDAR, cameras, IMUs, force/torque sensors</li>
            </ul>
            <h3>Weeks 3-5: ROS 2 Fundamentals</h3>
            <ul>
              <li>ROS 2 architecture and core concepts</li>
              <li>Nodes, topics, services, and actions</li>
              <li>Building ROS 2 packages with Python</li>
              <li>Launch files and parameter management</li>
            </ul>
            <h3>Weeks 6-7: Robot Simulation with Gazebo</h3>
            <ul>
              <li>Gazebo simulation environment setup</li>
              <li>URDF and SDF robot description formats</li>
              <li>Physics simulation and sensor simulation</li>
              <li>Introduction to Unity for robot visualization</li>
            </ul>
            <h3>Weeks 8-10: NVIDIA Isaac Platform</h3>
            <ul>
              <li>NVIDIA Isaac SDK and Isaac Sim</li>
              <li>AI-powered perception and manipulation</li>
              <li>Reinforcement learning for robot control</li>
              <li>Sim-to-real transfer techniques</li>
            </ul>
            <h3>Weeks 11-12: Humanoid Robot Development</h3>
            <ul>
              <li>Humanoid robot kinematics and dynamics</li>
              <li>Bipedal locomotion and balance control</li>
              <li>Manipulation and grasping with humanoid hands</li>
              <li>Natural human-robot interaction design</li>
            </ul>
            <h3>Week 13: Conversational Robotics</h3>
            <ul>
              <li>Integrating GPT models for conversational AI in robots</li>
              <li>Speech recognition and natural language understanding</li>
              <li>Multi-modal interaction: speech, gesture, vision</li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Assessments</Heading>
            <ul>
              <li>ROS 2 package development project</li>
              <li>Gazebo simulation implementation</li>
              <li>Isaac-based perception pipeline</li>
              <li>Capstone: Simulated humanoid robot with conversational AI</li>
            </ul>
          </section>

          <section>
            <Heading as="h2">Hardware Requirements</Heading>
            <p>
              This course is technically demanding. It sits at the intersection of three heavy computational loads: Physics Simulation (Isaac Sim/Gazebo), Visual Perception (SLAM/Computer Vision), and Generative AI (LLMs/VLA).
            </p>
            <p>
              Because the capstone involves a "Simulated Humanoid," the primary investment must be in High-Performance Workstations. However, to fulfill the "Physical AI" promise, you also need Edge Computing Kits (brains without bodies) or specific robot hardware.
            </p>

            <h3>1. The "Digital Twin" Workstation (Required per Student)</h3>
            <p>
              This is the most critical component. NVIDIA Isaac Sim is an Omniverse application that requires "RTX" (Ray Tracing) capabilities. Standard laptops (MacBooks or non-RTX Windows machines) will not work.
            </p>
            <ul>
              <li>GPU (The Bottleneck): NVIDIA RTX 4070 Ti (12GB VRAM) or higher.</li>
              <li>Why: You need high VRAM to load the USD (Universal Scene Description) assets for the robot and environment, plus run the VLA (Vision-Language-Action) models simultaneously.</li>
              <li>Ideal: RTX 3090 or 4090 (24GB VRAM) allows for smoother "Sim-to-Real" training.</li>
              <li>CPU: Intel Core i7 (13th Gen+) or AMD Ryzen 9.</li>
              <li>Why: Physics calculations (Rigid Body Dynamics) in Gazebo/Isaac are CPU-intensive.</li>
              <li>RAM: 64 GB DDR5 (32 GB is the absolute minimum, but will crash during complex scene rendering).</li>
              <li>OS: Ubuntu 22.04 LTS.</li>
              <li>Note: While Isaac Sim runs on Windows, ROS 2 (Humble/Iron) is native to Linux. Dual-booting or dedicated Linux machines are mandatory for a friction-free experience.</li>
            </ul>

            <h3>2. The "Physical AI" Edge Kit</h3>
            <p>
              Since a full humanoid robot is expensive, students learn "Physical AI" by setting up the nervous system on a desk before deploying it to a robot. This kit covers Module 3 (Isaac ROS) and Module 4 (VLA).
            </p>
            <ul>
              <li>The Brain: NVIDIA Jetson Orin Nano (8GB) or Orin NX (16GB).</li>
              <li>Role: This is the industry standard for embodied AI. Students will deploy their ROS 2 nodes here to understand resource constraints vs. their powerful workstations.</li>
              <li>The Eyes (Vision): Intel RealSense D435i or D455.</li>
              <li>Role: Provides RGB (Color) and Depth (Distance) data. Essential for the VSLAM and Perception modules.</li>
              <li>The Inner Ear (Balance): Generic USB IMU (BNO055) (Often built into the RealSense D435i or Jetson boards, but a separate module helps teach IMU calibration).</li>
              <li>Voice Interface: A simple USB Microphone/Speaker array (e.g., ReSpeaker) for the "Voice-to-Action" Whisper integration.</li>
            </ul>

            <h3>3. The Robot Lab</h3>
            <p>
              For the "Physical" part of the course, you have three tiers of options depending on budget.
            </p>
            <h4>Option A: The "Proxy" Approach (Recommended for Budget)</h4>
            <p>
              Use a quadruped (dog) or a robotic arm as a proxy. The software principles (ROS 2, VSLAM, Isaac Sim) transfer 90% effectively to humanoids.
            </p>
            <ul>
              <li>Robot: Unitree Go2 Edu (~$1,800 - $3,000).</li>
              <li>Pros: Highly durable, excellent ROS 2 support, affordable enough to have multiple units.</li>
              <li>Cons: Not a biped (humanoid).</li>
            </ul>
            <h4>Option B: The "Miniature Humanoid" Approach</h4>
            <p>
              Small, table-top humanoids.
            </p>
            <ul>
              <li>Robot: Unitree H1 is too expensive ($90k+), so look at Unitree G1 (~$16k) or Robotis OP3 (older, but stable, ~$12k).</li>
              <li>Budget Alternative: Hiwonder TonyPi Pro (~$600).</li>
              <li>Warning: The cheap kits (Hiwonder) usually run on Raspberry Pi, which cannot run NVIDIA Isaac ROS efficiently. You would use these only for kinematics (walking) and use the Jetson kits for AI.</li>
            </ul>
            <h4>Option C: The "Premium" Lab (Sim-to-Real specific)</h4>
            <p>
              If the goal is to actually deploy the Capstone to a real humanoid:
            </p>
            <ul>
              <li>Robot: Unitree G1 Humanoid.</li>
              <li>Why: It is one of the few commercially available humanoids that can actually walk dynamically and has an SDK open enough for students to inject their own ROS 2 controllers.</li>
            </ul>

            <h3>4. Summary of Architecture</h3>
            <p>
              To teach this successfully, your lab infrastructure should look like this:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Hardware</th>
                  <th>Function</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sim Rig</td>
                  <td>PC with RTX 4080 + Ubuntu 22.04</td>
                  <td>Runs Isaac Sim, Gazebo, Unity, and trains LLM/VLA models.</td>
                </tr>
                <tr>
                  <td>Edge Brain</td>
                  <td>Jetson Orin Nano</td>
                  <td>Runs the "Inference" stack. Students deploy their code here.</td>
                </tr>
                <tr>
                  <td>Sensors</td>
                  <td>RealSense Camera + Lidar</td>
                  <td>Connected to the Jetson to feed real-world data to the AI.</td>
                </tr>
                <tr>
                  <td>Actuator</td>
                  <td>Unitree Go2 or G1 (Shared)</td>
                  <td>Receives motor commands from the Jetson.</td>
                </tr>
              </tbody>
            </table>
            <p>
              If you do not have access to RTX-enabled workstations, we must restructure the course to rely entirely on cloud-based instances (like AWS RoboMaker or NVIDIA's cloud delivery for Omniverse), though this introduces significant latency and cost complexity.
            </p>
            <p>
              Building a "Physical AI" lab is a significant investment. You will have to choose between building a physical On-Premise Lab at Home (High CapEx) versus running a Cloud-Native Lab (High OpEx).
            </p>

            <h3>Option 2 High OpEx: The "Ether" Lab (Cloud-Native)</h3>
            <p>
              Best for: Rapid deployment, or students with weak laptops.
            </p>
            <h4>1. Cloud Workstations (AWS/Azure) Instead of buying PCs, you rent instances.</h4>
            <ul>
              <li>Instance Type: AWS g5.2xlarge (A10G GPU, 24GB VRAM) or g6e.xlarge.</li>
              <li>Software: NVIDIA Isaac Sim on Omniverse Cloud (requires specific AMI).</li>
              <li>Cost Calculation:</li>
              <ul>
                <li>Instance cost: ~$1.50/hour (spot/on-demand mix).</li>
                <li>Usage: 10 hours/week × 12 weeks = 120 hours.</li>
                <li>Storage (EBS volumes for saving environments): ~$25/quarter.</li>
                <li>Total Cloud Bill: ~$205 per quarter.</li>
              </ul>
            </ul>
            <h4>2. Local "Bridge" Hardware You cannot eliminate hardware entirely for "Physical AI." You still need the edge devices to deploy the code physically.</h4>
            <ul>
              <li>Edge AI Kits: You still need the Jetson Kit for the physical deployment phase.</li>
              <li>Cost: $700 (One-time purchase).</li>
              <li>Robot: You still need one physical robot for the final demo.</li>
              <li>Cost: $3,000 (Unitree Go2 Standard).</li>
            </ul>
            <h3>The Economy Jetson Student Kit</h3>
            <p>
              Best for: Learning ROS 2, Basic Computer Vision, and Sim-to-Real control.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Model</th>
                  <th>Price (Approx.)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Brain</td>
                  <td>NVIDIA Jetson Orin Nano Super Dev Kit (8GB)</td>
                  <td>$249</td>
                  <td>New official MSRP (Price dropped from ~$499). Capable of 40 TOPS.</td>
                </tr>
                <tr>
                  <td>The Eyes</td>
                  <td>Intel RealSense D435i</td>
                  <td>$349</td>
                  <td>Includes IMU (essential for SLAM). Do not buy the D435 (non-i).</td>
                </tr>
                <tr>
                  <td>The Ears</td>
                  <td>ReSpeaker USB Mic Array v2.0</td>
                  <td>$69</td>
                  <td>Far-field microphone for voice commands (Module 4).</td>
                </tr>
                <tr>
                  <td>Wi-Fi</td>
                  <td>(Included in Dev Kit)</td>
                  <td>$0</td>
                  <td>The new "Super" kit includes the Wi-Fi module pre-installed.</td>
                </tr>
                <tr>
                  <td>Power/Misc</td>
                  <td>SD Card (128GB) + Jumper Wires</td>
                  <td>$30</td>
                  <td>High-endurance microSD card required for the OS.</td>
                </tr>
                <tr>
                  <td>TOTAL</td>
                  <td></td>
                  <td>~$700 per kit</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <h3>3. The Latency Trap (Hidden Cost)</h3>
            <p>
              Simulating in the cloud works well, but controlling a real robot from a cloud instance is dangerous due to latency.
            </p>
            <p>
              Solution: Students train in the Cloud, download the model (weigh and alaso the home page is not looking good and attractive so correct the ui and remove the builtin data from the docusaurus website which is already generated write the content yourself
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
