import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}
