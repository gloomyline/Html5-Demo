class GameEvent extends egret.Event
{
    public static GAMEOVER:string = 'game_over_event';
    public static GAMEHIT:string = 'game_hit_event';
    public static GAMESTART:string = 'game_start_event';
    public static GAMEPUSH:string = 'game_push_event';

    public constructor(type:string,bubbles:boolean=false,cancelable:boolean=false)
    {
        super(type,bubbles,cancelable);
    }
}