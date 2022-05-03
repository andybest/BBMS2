import { NamingStrategyInterface, DefaultNamingStrategy } from "typeorm"; 

function snakeCase(input: string): string {
    return input.replace(/[A-Z]/g, (match, offset) => { 
        return offset == 0 ? match.toLowerCase() : '_' + match.toLowerCase();
    });
}

export class SnakeCaseNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
        return snakeCase(embeddedPrefixes.concat(customName ? customName : propertyName).join('_'));
    }
}