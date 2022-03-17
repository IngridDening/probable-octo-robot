import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1080,
	height: 720

});

window.addEventListener("resize", ()=>{
	console.log("resized!");
const scaleX = window.innerWidth / app.screen.width;
const scaleY = window.innerHeight / app.screen.height;
const scale =Math.min(scaleX, scaleY);

const gameWidth = Math.round (app.screen.width * scale);
const gameHeight = Math.round (app.screen.height * scale);

const marginHorizontal = Math.floor ((window.innerWidth- gameWidth) / 2);
const marginVertical = Math.floor ((window.innerHeight - gameHeight) / 2);

app.view.style.width = gameWidth + "px";
app.view.style.height = gameHeight + "px";

app.view.style.marginLeft= marginHorizontal + "px";
app.view.style.marginRight = marginHorizontal + "px";

app.view.style.marginTop = marginVertical + "px";
app.view.style.marginBottom = marginVertical + "px;"
});
window.dispatchEvent (new Event ("resize"));

Loader.shared.add({url:"./Imprimir.jpg", name: "Revenant"});
Loader.shared.add({url: "./SOMBRERO_GRIS.png", name: "Hat"})

Loader.shared.onComplete.add (()=>{
	//console.log("Hola mundo!", imagen.width, imagen.height);
	
	//clampy.anchor.set(0);

	const imagen: Sprite = Sprite.from("Revenant");
	
	//imagen.x = 100;
	//imagen.y = 100;
	
	//imagen.scale.x = 0.5;
	//imagen.scale.y = 0.5; 

	const hat: Sprite = Sprite.from("Hat");
	
	hat.anchor.set(0.5);
	hat.scale.set(0.3,0.3);
	hat.position.set(900,-50); 
	hat.rotation = 75;
	
	const RevenantWithHat: Container = new Container ();

	RevenantWithHat.addChild(imagen);
	RevenantWithHat.addChild(hat);

	RevenantWithHat.scale.set (0.5);
	RevenantWithHat.x = 100;
	RevenantWithHat.y = 100;

	app.stage.addChild(RevenantWithHat);
});
Loader.shared.load();