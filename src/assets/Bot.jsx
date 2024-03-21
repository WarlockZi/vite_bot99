export const Bot = (props) => {
    const white = 'white';
    return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 600 109"
            width="600"
            height="109"
            className={props.className} 
            >

            <g fill={white}>
                <path d="M0.1 55.82C17.01 28.01 27.58 10.62 31.81 3.67C33.36 1.12 36.13 -0.44 39.12 -0.45C41.53 -0.46 47.57 -0.48 57.22 -0.51C40.96 26.39 30.79 43.2 26.72 49.93C24.51 53.59 20.54 55.82 16.26 55.82C14.11 55.82 8.72 55.82 0.1 55.82Z" id="left"></path>
                <path d="M53.8 106.64C70.71 78.82 81.28 61.44 85.51 54.48C87.06 51.93 89.83 50.37 92.82 50.36C95.23 50.35 101.26 50.33 110.92 50.31C94.65 77.2 84.49 94.01 80.42 100.74C78.21 104.4 74.24 106.64 69.96 106.64C67.81 106.64 62.42 106.64 53.8 106.64Z" id="right"></path>
            </g>
            <g fill={props.style.blue}>
                <path d="M572.98 2.18C584.39 2.18 591.51 2.18 594.36 2.18C597.84 2.18 599.81 6.16 597.71 8.92C591.5 17.08 574.47 39.47 567.38 48.79C567.02 49.28 566.31 49.32 565.89 48.88C562.43 45.24 554.57 36.97 551.54 33.78C549.86 32.02 549.79 29.27 551.37 27.42C554.25 24.06 561.46 15.64 572.98 2.18Z" id="tick"></path>
                <path d="M0.1 109C33.09 55.62 53.7 22.25 61.95 8.9C65.2 3.64 70.95 0.44 77.13 0.44C81.64 0.44 92.9 0.44 110.92 0.44C76.35 54.4 54.75 88.13 46.11 101.62C43.16 106.22 38.07 109 32.61 109C28.27 109 17.44 109 0.1 109Z" id="middle"></path>
            </g>
            <g>
                <path d="M150.96 2.18C154.45 2.18 157.61 4.27 158.97 7.49C162.53 15.9 171.43 36.93 185.67 70.58C199.64 37.81 208.38 17.33 211.87 9.14C213.67 4.92 217.82 2.18 222.4 2.18C226.25 2.18 229.74 2.18 233.47 2.18C237.34 2.18 239.96 6.14 238.45 9.7C230.29 28.93 208.71 79.8 200.47 99.2C198.76 103.24 194.8 105.86 190.41 105.86C187.3 105.86 184.98 105.86 181.81 105.86C177.59 105.86 173.78 103.37 172.09 99.5C163.59 80.04 141.03 28.4 132.57 9.03C131.16 5.8 133.53 2.18 137.05 2.18C140.99 2.18 146.68 2.18 150.96 2.18Z" id="v"></path>

                <path d="M251 6.99C251 4.34 253.15 2.18 255.81 2.18C260.33 2.18 268.74 2.18 273.18 2.18C276.05 2.18 278.39 4.51 278.39 7.39C278.39 27.09 278.39 82.3 278.39 102.32C278.39 104.28 276.8 105.86 274.85 105.86C270.08 105.86 259.81 105.86 255.17 105.86C252.87 105.86 251 104 251 101.7C251 81.79 251 26.77 251 6.99Z" id="I"></path>


                <path d="M324.94 24.35C308.43 24.35 298.11 24.35 293.98 24.35C291.06 24.35 288.69 21.98 288.69 19.06C288.69 15.74 288.69 11.69 288.69 8.53C288.69 5.18 291.4 2.46 294.75 2.46C313.2 2.47 363.77 2.47 382.54 2.47C385 2.47 387 4.46 387 6.92C387 10.41 387 17.04 387 20.68C387 22.71 385.35 24.35 383.32 24.35C378.98 24.35 368.12 24.35 350.75 24.35C350.75 65.6 350.75 91.38 350.75 101.69C350.75 104.15 348.75 106.15 346.29 106.15C342.02 106.15 333.38 106.15 329.04 106.15C326.78 106.15 324.94 104.31 324.94 102.04C324.94 91.68 324.94 65.79 324.94 24.35Z" id="T"></path>

                <path d="M398.29 8.6C398.29 5.21 401.04 2.46 404.43 2.46C421.31 2.46 466.21 2.46 483.18 2.46C486.3 2.46 488.83 4.99 488.83 8.11C488.83 11.14 488.83 14.21 488.83 17.15C488.83 20.53 486.08 23.28 482.7 23.29C474.98 23.3 455.67 23.33 424.78 23.39L424.78 43.45C450.56 43.45 466.67 43.45 473.11 43.45C475.88 43.45 478.12 45.69 478.12 48.46C478.12 51.63 478.12 55.87 478.12 58.98C478.12 61.94 475.72 64.33 472.77 64.33C466.37 64.33 450.37 64.33 424.78 64.33C424.53 77.83 424.53 84.71 424.78 84.96C425.01 85.19 444.86 85.2 484.33 84.98C486.81 84.97 488.83 86.97 488.83 89.45C488.83 92.79 488.83 98.31 488.83 101.65C488.83 104.13 486.82 106.15 484.34 106.15C467.13 106.15 420 106.15 402.79 106.15C400.31 106.15 398.29 104.13 398.29 101.65C398.29 81.81 398.29 28.11 398.29 8.6Z" id="e"></path>

                <path d="M530.34 52.96C511.98 29.3 500.51 14.51 495.92 8.6C493.98 6.1 495.76 2.46 498.92 2.46C503.57 2.46 512.83 2.46 518.25 2.46C520.71 2.46 523.05 3.58 524.59 5.51C540.71 25.64 583.58 79.14 598.93 98.31C601.46 101.47 599.21 106.15 595.17 106.15C591.22 106.15 584.16 106.15 578.9 106.15C576.69 106.15 574.6 105.17 573.18 103.47C569.65 99.26 560.85 88.75 546.75 71.92C533.65 87.83 525.47 97.78 522.19 101.75C519.9 104.53 516.49 106.15 512.89 106.15C508.54 106.15 500.53 106.15 496.02 106.15C494.01 106.15 492.85 103.85 494.04 102.23C498.88 95.66 510.98 79.24 530.34 52.96Z" id="x"></path>
            </g>

        </svg>
    )
}