describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('land', function() {
    it('instructs a plane to land at airport and confirms it has landed', function(){

      expect(airport.land(plane)).toBe("Plane " + plane + " has landed.");
    });
  });

});
