// Model that represents the field, map, dungeon, etc.
export class PlayFieldGrid{
    
    public columns : number;
    public rows: number;
    public FieldGrid : string[][] = [];
    public cssHeigth: number;
    public cssWidth: number;
    public cssTileSize: number;
}