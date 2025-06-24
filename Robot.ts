 */

enum Richting {
    omhoog,
    vooruit,
    omlaag
}

enum Blik {
    links,
    vooruit,
    rechts
}

//% color="#AA278D" weight=100
namespace robot {
    //% block
    export function rechterarm(kies:Richting):void {
      if (kies == Richting.omhoog)
        pins.servoWritePin(AnalogPin.P0,180)
      else if (kies == Richting.omlaag)
        pins.servoWritePin(AnalogPin.P0,0)
      else if (kies == Richting.vooruit)
        pins.servoWritePin(AnalogPin.P0,90)
      }
    //% block
    export function linkerarm(kies:Richting):void {
      if (kies == Richting.omhoog)
        pins.servoWritePin(AnalogPin.P2,0)
      else if (kies == Richting.omlaag)
        pins.servoWritePin(AnalogPin.P2,180)
      else if (kies == Richting.vooruit)
        pins.servoWritePin(AnalogPin.P2,90)
      }
      //% block
    export function hoofd(kies:Blik):void {
      if (kies == Blik.links)
        pins.servoWritePin(AnalogPin.P1,180)
      else if (kies == Blik.rechts)
        pins.servoWritePin(AnalogPin.P1,0)
      else if (kies == Blik.vooruit)
        pins.servoWritePin(AnalogPin.P1,90)
      }
    }



