<template>
  <div class="svg-background">
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <!-- Definitions for animations -->
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:rgba(0,0,0,0.1);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(0,0,0,0.3);stop-opacity:1" />
        </linearGradient>

        <!-- Animation patterns -->
        <pattern id="pattern1" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 L100 50" stroke="black" stroke-width="1" fill="none">
            <animate attributeName="d" dur="15s" repeatCount="indefinite" values="M0 50 L100 50;
                         M0 25 L100 75;
                         M0 75 L100 25;
                         M0 50 L100 50" />
          </path>
        </pattern>
      </defs>

      <!-- Background rectangle -->
      <rect width="100%" height="100%" fill="white" opacity="0.1" />

      <!-- Animated lines -->
      <!-- Horizontal moving line -->
      <line x1="0" y1="100" x2="800" y2="100" stroke="black" stroke-width="1" opacity="0.2">
        <animate attributeName="y1" dur="20s" repeatCount="indefinite" values="100;150;200;250;300;250;200;150;100" />
        <animate attributeName="y2" dur="20s" repeatCount="indefinite" values="100;50;100;150;100;150;100;50;100" />
      </line>

      <!-- Diagonal moving lines -->
      <line x1="100" y1="0" x2="300" y2="600" stroke="black" stroke-width="1" opacity="0.15">
        <animate attributeName="x1" dur="25s" repeatCount="indefinite" values="100;200;300;400;300;200;100" />
        <animate attributeName="x2" dur="25s" repeatCount="indefinite" values="300;400;500;600;500;400;300" />
      </line>

      <line x1="700" y1="0" x2="500" y2="600" stroke="black" stroke-width="1" opacity="0.15">
        <animate attributeName="x1" dur="22s" repeatCount="indefinite" values="700;600;500;400;500;600;700" />
        <animate attributeName="x2" dur="22s" repeatCount="indefinite" values="500;400;300;200;300;400;500" />
      </line>

      <!-- Curved path -->
      <path d="M0,300 Q400,100 800,300" stroke="black" fill="none" stroke-width="1" opacity="0.2">
        <animate attributeName="d" dur="30s" repeatCount="indefinite" values="M0,300 Q400,100 800,300;
                     M0,350 Q400,250 800,350;
                     M0,250 Q400,450 800,250;
                     M0,300 Q400,100 800,300" />
      </path>

      <!-- Wave path -->
      <path d="M0,400 Q200,350 400,400 T800,400" stroke="black" fill="none" stroke-width="1" opacity="0.1">
        <animate attributeName="d" dur="18s" repeatCount="indefinite" values="M0,400 Q200,350 400,400 T800,400;
                     M0,400 Q200,450 400,400 T800,400;
                     M0,400 Q200,350 400,400 T800,400" />
      </path>

      <!-- Small floating lines -->
      <g opacity="0.1">
        <line x1="100" y1="100" x2="150" y2="100" stroke="black" stroke-width="1">
          <animate attributeName="x1" dur="12s" repeatCount="indefinite" values="100;120;90;100" />
          <animate attributeName="y1" dur="8s" repeatCount="indefinite" values="100;110;90;100" />
          <animate attributeName="x2" dur="10s" repeatCount="indefinite" values="150;170;140;150" />
          <animate attributeName="y2" dur="14s" repeatCount="indefinite" values="100;90;110;100" />
        </line>

        <line x1="600" y1="200" x2="650" y2="200" stroke="black" stroke-width="1">
          <animate attributeName="x1" dur="15s" repeatCount="indefinite" values="600;620;590;600" />
          <animate attributeName="y1" dur="10s" repeatCount="indefinite" values="200;210;190;200" />
          <animate attributeName="x2" dur="12s" repeatCount="indefinite" values="650;670;640;650" />
          <animate attributeName="y2" dur="8s" repeatCount="indefinite" values="200;190;210;200" />
        </line>

        <line x1="300" y1="500" x2="350" y2="500" stroke="black" stroke-width="1">
          <animate attributeName="x1" dur="18s" repeatCount="indefinite" values="300;320;290;300" />
          <animate attributeName="y1" dur="12s" repeatCount="indefinite" values="500;510;490;500" />
          <animate attributeName="x2" dur="15s" repeatCount="indefinite" values="350;370;340;350" />
          <animate attributeName="y2" dur="10s" repeatCount="indefinite" values="500;490;510;500" />
        </line>

        <line x1="750" y1="450" x2="800" y2="450" stroke="black" stroke-width="1">
          <animate attributeName="x1" dur="20s" repeatCount="indefinite" values="750;770;740;750" />
          <animate attributeName="y1" dur="16s" repeatCount="indefinite" values="450;460;440;450" />
          <animate attributeName="x2" dur="18s" repeatCount="indefinite" values="800;820;790;800" />
          <animate attributeName="y2" dur="14s" repeatCount="indefinite" values="450;440;460;450" />
        </line>
      </g>

      <!-- Cross pattern -->
      <g opacity="0.08">
        <line x1="200" y1="300" x2="250" y2="350" stroke="black" stroke-width="1">
          <animate attributeName="x1" dur="25s" repeatCount="indefinite" values="200;210;190;200" />
          <animate attributeName="y1" dur="22s" repeatCount="indefinite" values="300;310;290;300" />
        </line>

        <line x1="250" y1="300" x2="200" y2="350" stroke="black" stroke-width="1">
          <animate attributeName="x1" dur="23s" repeatCount="indefinite" values="250;260;240;250" />
          <animate attributeName="y1" dur="24s" repeatCount="indefinite" values="300;290;310;300" />
        </line>

        <line x1="550" y1="150" x2="600" y2="200" stroke="black" stroke-width="1">
          <animate attributeName="x1" dur="22s" repeatCount="indefinite" values="550;560;540;550" />
          <animate attributeName="y1" dur="20s" repeatCount="indefinite" values="150;160;140;150" />
        </line>

        <line x1="600" y1="150" x2="550" y2="200" stroke="black" stroke-width="1">
          <animate attributeName="x1" dur="21s" repeatCount="indefinite" values="600;610;590;600" />
          <animate attributeName="y1" dur="19s" repeatCount="indefinite" values="150;140;160;150" />
        </line>
      </g>

      <!-- Random dots with slow movement -->
      <g opacity="0.1">
        <circle cx="120" cy="120" r="3" fill="black">
          <animate attributeName="cx" dur="30s" repeatCount="indefinite" values="120;140;100;120" />
          <animate attributeName="cy" dur="35s" repeatCount="indefinite" values="120;100;140;120" />
        </circle>

        <circle cx="420" cy="320" r="2" fill="black">
          <animate attributeName="cx" dur="32s" repeatCount="indefinite" values="420;440;400;420" />
          <animate attributeName="cy" dur="28s" repeatCount="indefinite" values="320;300;340;320" />
        </circle>

        <circle cx="720" cy="220" r="4" fill="black">
          <animate attributeName="cx" dur="36s" repeatCount="indefinite" values="720;740;700;720" />
          <animate attributeName="cy" dur="38s" repeatCount="indefinite" values="220;200;240;220" />
        </circle>

        <circle cx="220" cy="520" r="3" fill="black">
          <animate attributeName="cx" dur="40s" repeatCount="indefinite" values="220;240;200;220" />
          <animate attributeName="cy" dur="42s" repeatCount="indefinite" values="520;500;540;520" />
        </circle>
      </g>
    </svg>
  </div>
</template>
