<template>
  <div class="svg-background">
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
      style="width:100%; height:100%;">
      <g stroke="black" stroke-width="1" fill="none">
        <!-- Zigzag crease line 1 -->
        <path>
          <animate attributeName="d" dur="6s" repeatCount="indefinite" values="
          M0,100 L100,80 L200,120 L300,90 L400,110 L500,85 L600,120 L700,90 L800,100;
          M0,100 L100,110 L200,90 L300,120 L400,100 L500,115 L600,90 L700,120 L800,100;
          M0,100 L100,80 L200,120 L300,90 L400,110 L500,85 L600,120 L700,90 L800,100
        " />
        </path>

        <!-- Zigzag crease line 2 -->
        <path opacity="0.6">
          <animate attributeName="d" dur="7s" repeatCount="indefinite" values="
          M0,200 L100,180 L200,220 L300,190 L400,210 L500,185 L600,220 L700,190 L800,200;
          M0,200 L100,210 L200,190 L300,220 L400,200 L500,215 L600,190 L700,220 L800,200;
          M0,200 L100,180 L200,220 L300,190 L400,210 L500,185 L600,220 L700,190 L800,200
        " />
        </path>

        <!-- Zigzag crease line 3 -->
        <path opacity="0.3">
          <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
          M0,300 L100,280 L200,320 L300,290 L400,310 L500,285 L600,320 L700,290 L800,300;
          M0,300 L100,310 L200,290 L300,320 L400,300 L500,315 L600,290 L700,320 L800,300;
          M0,300 L100,280 L200,320 L300,290 L400,310 L500,285 L600,320 L700,290 L800,300
        " />
        </path>
      </g>
    </svg>
  </div>
</template>

