/**
 * API service for communicating with the local Express server.
 */

export const api = {
  async getMenu() {
    const res = await fetch('/api/menu');
    return res.json();
  },
  async addMenuItem(item: any) {
    const res = await fetch('/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    return res.json();
  },
  async deleteMenuItem(id: string) {
    const res = await fetch(`/api/menu/${id}`, { method: 'DELETE' });
    return res.json();
  },
  
  async getEvents() {
    const res = await fetch('/api/events');
    return res.json();
  },
  async addEvent(event: any) {
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
    return res.json();
  },
  async deleteEvent(id: string) {
    const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
    return res.json();
  },
  
  async getGallery() {
    const res = await fetch('/api/gallery');
    return res.json();
  },
  async addGalleryImage(image: any) {
    const res = await fetch('/api/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(image),
    });
    return res.json();
  },
  async deleteGalleryImage(id: string) {
    const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
    return res.json();
  },
  
  async getConfig() {
    const res = await fetch('/api/config');
    return res.json();
  },
  async updateConfig(config: any) {
    const res = await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });
    return res.json();
  },
  
  async getReservations() {
    const res = await fetch('/api/reservations');
    return res.json();
  },
  async addReservation(reservation: any) {
    const res = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservation),
    });
    return res.json();
  },
  async updateReservationStatus(id: string, status: string) {
    const res = await fetch(`/api/reservations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    return res.json();
  },
  
  async login(email: string) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    return res.json();
  }
};
