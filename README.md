# Ethan Vandal Portfolio Site

This is a professional portfolio website, built with React and Bootstrap, and containerized with Docker.

## Getting Started

### Prerequisites
- Docker installed on your system

### Installation and Running

1. Clone the repository:
   ```bash
   git clone https://github.com/EdanBandoot/vandal_ethan_portfolio.git
   cd vandal_ethan_portfolio ```

2. Run it:
```bash
docker build -t vandal_ethan_portfolio .

docker run -d -p 5575:5575 --name vandal_ethan_coding_assignment14 vandal_ethan_portfolio

```

3. go to http://localhost:5575

4. Other helpful commands
```bash
docker stop vandal_ethan_coding_assignment14

docker rm vandal_ethan_coding_assignment14
