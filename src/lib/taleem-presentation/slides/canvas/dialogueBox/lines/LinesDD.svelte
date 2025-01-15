<script>
    //@ts-nocheck
    export let extra;

    function handleSheetChange(event) {
        let val = event.target.value;

        switch (val) {
            case 'arrowLeft':
                extra.lines = [ 
                    {x: 100, y: 35}, {x: 30, y: 35}, {x: 30, y: 20}, 
                    {x: 0, y: 50}, {x: 30, y: 80}, {x: 30, y: 65}, 
                    {x: 100, y: 65}, {x: 100, y: 35} 
                ];
                break;

            case 'arrowRight':
                extra.lines = [ 
                    {x: 0, y: 35}, {x: 70, y: 35}, {x: 70, y: 20}, 
                    {x: 100, y: 50}, {x: 70, y: 80}, {x: 70, y: 65}, 
                    {x: 0, y: 65}, {x: 0, y: 35} 
                ];
                break;

            case 'arrowUp':
                extra.lines = [ 
                    {x: 50, y: 0}, {x: 35, y: 30}, {x: 45, y: 30}, 
                    {x: 45, y: 100}, {x: 55, y: 100}, {x: 55, y: 30}, 
                    {x: 65, y: 30}, {x: 50, y: 0}
                ];
                break;

            case 'arrowDown':
                extra.lines = [ 
                    {x: 50, y: 100}, {x: 35, y: 70}, {x: 45, y: 70}, 
                    {x: 45, y: 0}, {x: 55, y: 0}, {x: 55, y: 70}, 
                    {x: 65, y: 70}, {x: 50, y: 100}
                ];
                break;

            case 'pentagon':
                extra.lines = [
                    {x: 50, y: 0}, {x: 95, y: 35}, {x: 75, y: 100}, 
                    {x: 25, y: 100}, {x: 5, y: 35}, {x: 50, y: 0}
                ];
                break;

            case 'hexagon':
                extra.lines = [
                    {x: 50, y: 0}, {x: 90, y: 25}, {x: 90, y: 75}, 
                    {x: 50, y: 100}, {x: 10, y: 75}, {x: 10, y: 25}, 
                    {x: 50, y: 0}
                ];
                break;

            case 'equilateralTriangle':
                extra.lines = [
                    {x: 50, y: 0}, {x: 0, y: 100}, {x: 100, y: 100}, 
                    {x: 50, y: 0}
                ];
                break;

            case 'rightTriangle':
                extra.lines = [
                    {x: 0, y: 0}, {x: 100, y: 100}, {x: 0, y: 100}, 
                    {x: 0, y: 0}
                ];
                break;

            case 'isoscelesUp' :
               extra.lines = [
                    {x: 50, y: 0}, {x: 0, y: 100}, {x: 100, y: 100}, 
                    {x: 50, y: 0}
                ];
                break;
            case 'isoscelesDown' :
            extra.lines = [
                {x: 50, y: 100}, {x: 0, y: 0}, {x: 100, y: 0}, 
                {x: 50, y: 100}
            ];

                break;
            case 'rightTriangleLeft' :
              
            extra.lines = [
                {x: 0, y: 0}, {x: 100, y: 0}, {x: 0, y: 100}, 
                {x: 0, y: 0}
            ];
                break;

            case 'rightTriangleRight' :
            extra.lines = [
                {x: 100, y: 0}, {x: 100, y: 100}, {x: 0, y: 100}, 
                {x: 100, y: 0}
            ];

            break;
            
            case 'scaleneTriangle' :
            extra.lines = [
                {x: 10, y: 90}, {x: 90, y: 80}, {x: 50, y: 10}, 
                {x: 10, y: 90}
            ];
                break;
             
case 'sword' :
// Sword
extra.lines = [
    {x: 45, y: 0}, {x: 55, y: 0}, {x: 55, y: 60}, 
    {x: 65, y: 60}, {x: 65, y: 80}, {x: 55, y: 80}, 
    {x: 55, y: 100}, {x: 45, y: 100}, {x: 45, y: 80}, 
    {x: 35, y: 80}, {x: 35, y: 60}, {x: 45, y: 60}, 
    {x: 45, y: 0}
];
break;

    case 'star':
    // Star
    extra.lines = [
        {x: 50, y: 0}, {x: 61, y: 35}, {x: 98, y: 35}, 
        {x: 68, y: 57}, {x: 79, y: 91}, {x: 50, y: 70}, 
        {x: 21, y: 91}, {x: 32, y: 57}, {x: 2, y: 35}, 
        {x: 39, y: 35}, {x: 50, y: 0}
    ];
    break;
    case 'heart':
    // Heart
    extra.lines = [
        {x: 50, y: 20}, {x: 70, y: 0}, {x: 100, y: 20}, 
        {x: 100, y: 50}, {x: 50, y: 100}, {x: 0, y: 50}, 
        {x: 0, y: 20}, {x: 30, y: 0}, {x: 50, y: 20}
    ];
    break;
    case 'lightning':
    // Lightning Bolt
    extra.lines = [
        {x: 65, y: 0}, {x: 30, y: 50}, {x: 55, y: 50}, 
        {x: 35, y: 100}, {x: 70, y: 50}, {x: 45, y: 50}, 
        {x: 65, y: 0}
    ];
    break;
    case 'crown':
    // Crown
    extra.lines = [
        {x: 0, y: 60}, {x: 20, y: 60}, {x: 25, y: 30}, 
        {x: 40, y: 50}, {x: 50, y: 20}, {x: 60, y: 50}, 
        {x: 75, y: 30}, {x: 80, y: 60}, {x: 100, y: 60}, 
        {x: 100, y: 80}, {x: 0, y: 80}, {x: 0, y: 60}
    ];
    break;

    
                default:
                break;
        }
    }
</script>
<div class="flex flex-col w-full space-y-2">
    <div class="border-b border-gray-700">
        <div class="px-2 text-[10px] text-yellow-200 text-left">Shapes</div>
        <div class="border border-gray-700 px-2 py-1">
            <select
                class="bg-gray-900 text-yellow-200 text-[10px] rounded w-full focus:outline-none focus:ring focus:ring-yellow-400"
                on:change={handleSheetChange}
            >
                <option value="arrowLeft">Arrow Left</option>
                <option value="arrowRight">Arrow Right</option>
                <option value="arrowUp">Arrow Up</option>
                <option value="arrowDown">Arrow Down</option>
                <option value="pentagon">Pentagon</option>
                <option value="hexagon">Hexagon</option>
                <option value="equilateralTriangle">Equilateral Triangle</option>
                <option value="rightTriangle">Right Triangle</option>
                <option value="isoscelesUp">Isosceles Triangle (Up)</option>
                <option value="isoscelesDown">Isosceles Triangle (Down)</option>
                <option value="rightTriangleLeft">Right-Angled Triangle (Left)</option>
                <option value="rightTriangleRight">Right-Angled Triangle (Right)</option>
                <option value="scaleneTriangle">Scalene Triangle</option>
                <option value="sword">Sword</option>
                <option value="shield">Shield</option>
                <option value="star">Star</option>
                <option value="heart">Heart</option>
                <option value="lightning">Lightning Bolt</option>
                <option value="crown">Crown</option>
            </select>
        </div>
    </div>
</div>
