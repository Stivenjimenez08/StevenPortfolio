const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjFiNjVhNzliNCwgMjAyMi8wNi8xMy0yMjowMTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFM0I2RUVCNjU1QjExRUVBN0M5QjNFMDQ2REEyRUVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFM0I2RUVDNjU1QjExRUVBN0M5QjNFMDQ2REEyRUVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkUzQjZFRTk2NTVCMTFFRUE3QzlCM0UwNDZEQTJFRUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkUzQjZFRUE2NTVCMTFFRUE3QzlCM0UwNDZEQTJFRUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6GB84FAAAGcklEQVR42uxc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";export{A as default};
