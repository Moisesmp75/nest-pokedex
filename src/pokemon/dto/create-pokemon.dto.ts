import { IsString, IsInt, MinLength, IsPositive, Min } from "class-validator";

export class CreatePokemonDto {

    //isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;
    
    @IsString()
    @MinLength(1)
    //isString, Minlength 1
    name: string
}
