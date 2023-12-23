//DESTRUCTIVE

const cats = [ "Milo", "Otis", "Garfield" ];

function destructivelyAppendCat ( name ){
       cats.push(name);
}
destructivelyAppendCat ("Ralph");

function destructivelyPrependCat ( name ){
    cats.unshift (name);
}
destructivelyPrependCat ( "Whiskers" );

function destructivelyRemoveLastCat ( name ){
    cats.pop (name);
}
destructivelyRemoveLastCat ( "Tom" );

function destructivelyRemoveFirstCat ( name ){
    cats.shift( name );
}
destructivelyRemoveFirstCat( "Andy" );

//NON-DESTRUCTIVE

function appendCat ( name ){
    let cats1 = [...cats, name ];
    return cats1;
}

function prependCat ( name ){
    let cats2 = [ name, ...cats ];
    return cats2;
}

function removeLastCat ( name ){
    let cats3 = cats.slice ( 0, -1 );
    return cats3;
}

function removeFirstCat ( name ){
    let cats4 = cats.slice ( 1, cats.length );
    return cats4;
}