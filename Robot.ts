/**
 * Custom blocks
*/
//% color=#2b569b weight=10 icon="\uf544"
enum Richting {
    Omhoog = 1
    Vooruit = 2
    Omlaag = 3
  }
namespace Robot{
  //% blockId=Rechter_arm weight=100
  //% block="Rechter arm %richting"
  export function Rechter_arm(Richting): void {
    pins.servoWritePin(AnalogPin.P1, 0)
  }
}
