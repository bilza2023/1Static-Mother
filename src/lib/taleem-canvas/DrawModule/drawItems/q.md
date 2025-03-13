i have a tree in my app in this format 
and i use function like this to get its value

  public getImage(name: string): HTMLImageElement | undefined {
    return this.images.get(name);
  }
write me a function getImageByUrl("/images/baloons.png");
and it return this
{
        "key": "baloons.png",
        "value": {
            "url": "/images/baloons.png",
            "img": {}
        }
    }

////////////////////////////////    
this.images = [
    {
        "key": "atom.png",
        "value": {
            "url": "/images/atom.png",
            "img": {}
        }
    },
    {
        "key": "baloons.png",
        "value": {
            "url": "/images/baloons.png",
            "img": {}
        }
    },
    {
        "key": "activity1.jpg",
        "value": {
            "url": "/images/activity1.jpg",
            "img": {}
        }
    },
    {
        "key": "drops.png",
        "value": {
            "url": "/images/drops.png",
            "img": {}
        }
    }
]