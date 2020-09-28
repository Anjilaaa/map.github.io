L.Mask = L.Polygon.extend({
  options: {
    stroke: true,
    color: '#7ca7f8',
    width: 1,
    opacity: 0.2,
    fillColor: '#2a2f38',
    fillOpacity: 0.3,
    clickable: true,
    outerBounds: new L.LatLngBounds([-90, -360], [90, 360]),
  },

  initialize: function (latLngs, options) {
    const outerBoundsLatLngs = [
      this.options.outerBounds.getSouthWest(),
      this.options.outerBounds.getNorthWest(),
      this.options.outerBounds.getNorthEast(),
      this.options.outerBounds.getSouthEast(),
    ];

    L.Polygon.prototype.initialize.call(this, [outerBoundsLatLngs, latLngs], options);
  },
});

L.mask = function (latLngs, options) {
  return new L.Mask(latLngs, options);
};